from random import choice, randint


def get_response(user_input: str) -> str:
  if user_input.startswith('$'):
    return ''
  else:
    lowered: str = user_input.lower()

    hello: list = ['hello', 'hi', 'what\'s up', 'hey']

    hello_response: list = [
        'Hi!', 'Hello there!', 'Hello!', 'What\'s up!', 'How you doin\'.',
        'Konnichiwa!', 'Konnichiwassup!!!'
    ]
    greetings: list = ['how are you', 'how\'s it going', 'how you doing', 'how are you feeling']

    greetings_response: list = [
        ' fine!', ' alright', ' okay', ' excited', ' great!', ' good!',
        ' awesome!', ' fantastic!', ' fabulous!', ' daijoubu desu!',
        ' daijoubun\'t...', ' hungry...', ' angry', ' tired...', ' bored...',
        ' sleepy...', ' upset...', ' hangry...', ' sad...'
    ]

    bye: list = ['Goodbye!', 'Bye!', 'See you later!', 'Sayonara!']

    degree: list = [
        ' quite', ' very', ' super', ' kinda', ' a little', ' a little bit'
    ]

    weather: list = ['weather', 'temperature', 'temp', 'degrees']

    weather_response: list = [
        ' sunny', ' cloudy', ' rainy', ' windy', ' foggy', ' hot', ' cold',
        ' warm', ' humid', ' roasting', ' freezing'
    ]
    hype: list = [
        'ayyy', 'lfg', 'sheesh', 'sheeesh', 'sheeeeesh', 'sheeeeeeeeeesh', 'let\'s gooo', 'awsome', 'hype'
    ]

    hype_response: list = [
        'HYPE!!!', 'SHEEEEEEEEEEESH!!!', 'GYADDAAAAAMN!!!',
        'SHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESH!!!', 'WOOOOOW!!!!!',
        'AWESOME!!!!', 'SUPERB!!!!', 'NICE!!!', 'NAISUUUU!!!', 'SUUUIIIIIIII!!!!'
    ]

    unknown: list = [
        'I don\'t understand', 'I don\'t know', 'I don\'t know what you mean',
        'I don\'t know what you\'re talking about', 'What was that?', 'Huh?!',
        'What?!', 'Sorry, what?', 'What do you mean?', 'NANI!?!?!!?'
    ]
    
    thinking: list = [
        'mmmmm', 'mmmmmmmmm', 'hmmmmm', 'hmmmmmmmmmmmmm', 'hmm', 'ummm', 'ummmmm', 'ummmmmmmmmmmmm'               
    ]

    if any(keyword in lowered for keyword in thinking):
      return '...'

    elif any(keyword in lowered for keyword in hello):
      return choice(hello_response)

    elif any(keyword in lowered for keyword in greetings):
      return 'I\'m' + choice(degree) + choice(greetings_response)

    elif any(keyword in lowered for keyword in bye):
      return choice(bye)

    elif any(keyword in lowered for keyword in weather):
      return 'It\'s' + choice(degree) + choice(weather_response)

    elif any(keyword in lowered for keyword in hype):
      return choice(hype_response)

    elif 'roulette' in lowered:
      rb = int(randint(0, 99))
      if (rb % 2) == 0:
        return 'Red ' + str(rb)
      else:
        return 'Black ' + str(rb)

    elif 'roll' in lowered:
      return str(randint(1, 6))

    elif 'ping' in lowered:
      return 'pong'

    else:
      return choice(unknown)
