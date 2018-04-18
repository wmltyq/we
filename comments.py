import requests
import json


def get_commets():
    url = 'http://music.163.com/weapi/v1/resource/comments/R_SO_4_551816010?csrf_token='

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
    }

    # 加密数据，直接拿过来用
    user_data = {
        'params': 'oE1u8ZpRz2qQJadvTzMjNDMXBHtoIaJ1lTAhxkijLOkxMkhQtLxP2j9yPEe5bcvWc14plO0KT/jlGrak8E03jG7l6+BC4498VsWC+wxHenmf1+CC+1GQFNnNDDmZD9J0TY6DJgvA7OdDl3LOp1T47OXUnHSxFZnDkA7A8Jq1KtFX6ExePp/oQD9poYD+3UMe',
        'encSecKey': '89829dee770079f98657b1fbe9064be2e4f1900c59ba9f1c37e18d718a54c02fa48225f9ef6dee4f378e70d79166b27142941dad37fba1c2d5d7a0100056f621f5ef443d90cb874c47b81bede1223a4ac34967a3c5b5ec1a9a70396e5d60550058e727b86d8a1d121b6725078353891cddf8c8dfab2a7f760107bd6cbc827109'
    }

    response = requests.post(url, headers=headers, data=user_data)
    data = json.loads(response.text)
    hotcomments = []
    for hotcomment in data['hotComments']:
        item = {
            'nickname': hotcomment['user']['nickname'],
            'content': hotcomment['content'],
            'likedCount': hotcomment['likedCount']
        }
        hotcomments.append(item)

    # 获取评论用户名，内容，以及对应的获赞数
    nickname = [item['nickname'] for item in hotcomments]
    content = [item['content'] for item in hotcomments]
    likedCount = [item['likedCount'] for item in hotcomments]

    return nickname, content, likedCount


def draw_bar(nickname, likedCount):
    from pyecharts import Bar

    # 利用之前获得评论用户名和对应的点赞数，将其制作成图表图
    bar = Bar('热评中点赞数示例图')
    bar.add('点赞数', nickname, likedCount, is_stack=True, mark_line=['min', 'max'], mark_point=['average'])
    bar.render()


def draw_wordcloud(content):
    from wordcloud import WordCloud
    import matplotlib.pyplot as plt
    import numpy as np
    from PIL import Image

    content_text = ''.join(content)
    alice_coloring = np.array(Image.open('img/QQ.jpg'))
    wordcloud = WordCloud(font_path='font/simhei.ttf', mask=alice_coloring, background_color='white', max_words=200, scale=10).generate(content_text)
    plt.figure()
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    # 可以使用以下方法保存词云
    # plt.savefig('img/plt.jpg', dpi=200)
    plt.show()

    # 是否保存文件
    save = True
    if save:
        wordcloud.to_file('img/wordcloud.jpg')


if __name__ == '__main__':
    nickname, content, likedCount = get_commets()
    # 是否重绘条形图
    redraw_bar = True
    if redraw_bar:
        draw_bar(nickname, likedCount)

    # 是否重绘词云
    redraw_wordcloud = True
    draw_wordcloud(content)




