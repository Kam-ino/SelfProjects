import discord as dc
from discord.ext import commands, tasks
from responses import get_response
import datetime as dt
import CONFIG
from pandas_datareader import data as dat
import matplotlib.pyplot as plt
import asyncio
from bs4 import BeautifulSoup
import requests
from newsapi.newsapi_client import NewsApiClient
import yfinance
yfinance.pdr_override()

my_secret = CONFIG.VARIABLES['DISCORD_TOKEN']
news_letter = CONFIG.VARIABLES['NEWSAPI_TOKEN']

newsapi = NewsApiClient(api_key=news_letter)

intents: dc.Intents = dc.Intents.default()
intents.message_content = True
client: dc.Client = dc.Client(intents=intents)
bot = commands.Bot(command_prefix='$', intents=intents)

daily_news_dict = set()

async def send_message(message: dc.Message, user_message: str) -> None:
  if not user_message:
    print('Problem')
    return

  try:
    response: str = get_response(user_message)
    await message.channel.send(response)

  except Exception as e:
    print(e)


@client.event
async def on_ready() -> None:
  print(f'{client.user} is now running!')


@client.event
async def on_message(message: dc.Message) -> None:
  if message.author == client.user:
    return

  username: str = str(message.author)
  user_message: str = message.content
  channel: str = str(message.channel)

  print(f'[{channel}] {username}: "{user_message}"')
  await send_message(message, message.content)

@bot.command(name='graph')
async def graph(ctx, quo='BTCUSD'):
  response = 'https://www.tradingview.com/symbols/' + quo
  await ctx.send(response)

def get_news(source='bbc-news'):
  top_headlines = newsapi.get_top_headlines(sources=source)
  news_articles = top_headlines['articles']
  embed = dc.Embed(
    title = 'News',
    colour = dc.Colour.blue()
    
  )
  embed.set_footer(text='This news is from' + source)
  for l in news_articles:
    embed.add_field(name=l['title'], value=l['description'], inline = False)
    embed.add_field(name=l['url'], value=l['publishedAt'], inline=False)
  return embed
  
def get_data(stock, start_date, end_date):
    for retries in range(0,5):
        try:
            df = dat.get_data_yahoo(stock, start=start_date, end=end_date)
            return df['Adj Close']
        except:
            print("[ERROR]")
            print ('yfinance JSONDecodeError, retyring: ' + str(retries))
            print ('ticker: ' + stock + 'start: ' + str(start_date) + ';end: ' + str(end_date) + ';')
    return []

@bot.command(name='chart')
async def chart(ctx, *args):
  stock_symbol, time_frame = args
  now = dt.datetime.now()

  if time_frame == '1month':
    start_date = now - dt.timedelta(days=30)
  elif time_frame == '3months':
    start_date = now - dt.timedelta(days=90)
  elif time_frame == '6months':
    start_date = now - dt.timedelta(days=180)
  elif time_frame == '1year':
    start_date = now - dt.timedelta(days=365)
  else:
    await ctx.send("Invalid time frame. Please use '1month', '3months', '6months', or '1year'.")        
    return

  start_date_str = start_date.strftime('%Y-%m-%d')
  current_date = dt.datetime.today().strftime('%Y-%m-%d')

  data = get_data(stock_symbol, start_date_str, current_date)

  plt.clf()
  
  plot = data.plot(title='Stock Price over a year', color='blue')
  fig = plot.get_figure()
  filename = 'plot.png'
  fig.savefig(filename)
  await ctx.send(file=dc.File(filename))

async def run_bot() -> None:
  await bot.start(my_secret)
  await client.close()


async def run_client() -> None:
  await client.start(my_secret)
  await bot.close()


if __name__ == '__main__':
  loop = asyncio.get_event_loop()
  task = asyncio.gather(run_bot(), run_client())

  try:
    loop.run_until_complete(task)
  except KeyboardInterrupt:
    task.cancel()
    loop.run_until_complete(asyncio.gather(*tasks, return_exceptions=True))
  finally:
    loop.close()
