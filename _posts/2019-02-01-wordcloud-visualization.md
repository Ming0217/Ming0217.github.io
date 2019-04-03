---
layout: post
title:  "WordCloud Visualization for Books that I read"
date:   2019-02-01
excerpt: "visualize the most frequent words used by the authors"
project: true
tag:
- wordcloud 
- text
- visualization
comments: true
---

{% capture images %}

        https://i.imgur.com/0BZG7TIm.png
        https://i.imgur.com/D8O7HnOm.png
	https://i.imgur.com/zz4B1Ohm.png

{% endcapture %}
{% include gallery images=images ccaption="Shakespeare's Sonnets" cols=3 %}
     
Besides writing down the book reflections, I was wondering if there is anything else that I could do with the books that I read. The word cloud visualization for texts immediately popped into my mind. I tried a few online free tools but wasn't really happy with what I got, especially for the fact that I can't control what words to filter out. So I decided to do some research online and see if I could write my own script to generate the visualization. It turned out that it was not difficult at all because there is already an open source Python <a href="https://github.com/amueller/word_cloud"><b>library</b></a> available for generating word cloud, all I need to do is to understand its various APIs so that I could do my own customization. 

When it comes to word cloud visualization, there are mainly five areas that are great for customization:

* Color Theme of the Texts
* Shape of Visualization (Mask)
* Fonts
* Words Filtering
* Background Color

## Color Theme of the Texts

To change the color theme, we could install the <a href="https://jiffyclub.github.io/palettable/"><b>paltettable</b></a> library and import different existing color combinations:

{% highlight python %}

from palettable.wesanderson import Zissou_5,GrandBudapest1_4,Moonrise5_6,Margot1_5

{% endhighlight %} 

Once the library is imported, we can then define the color function, which will then be passed into the WordCloud `recolor` function as an argument later:

{% highlight python %}

def color_func3(word, font_size, position, orientation, random_state=None, **kwargs):
    return tuple(Zissou_5.colors[random.randint(1,4)])

{% endhighlight %}

## Shape of Visualization

Having the visualization always in a rectangle or square shape is kind of boring, we would want the visualization to go into any shape that we like. Again, achieving that is simple:

{% highlight python %}

def create_mask(imagename):
    icon = Image.open(imagename)
    mask = Image.new("RGB", icon.size, (255,255,255))
    mask.paste(icon,icon)
    mask = np.array(mask)
    return mask

image_path = "images/wine.png"

mask = create_mask(image_path)

{% endhighlight %}

This mask object would be passed into the WordCloud API as an argument to specify the shape of the visualization.

## Fonts

Download the types of fonts that you prefer (there are a lot of open source fonts that you could download from https://fonts.google.com/). And then read them in as a variable, which would also be passed into the WordCloud API as an argument to specify the fonts of the texts:

{% highlight python %}

font3 = "Fonts/LuckiestGuy-Regular.ttf"

{% endhighlight %}

## Words Filtering

Although the WordCloud library comes with a list of filtered words. You would very often still want to filter your own words when some less meaningful words end up big in your visualization. You could simply add the words that you want to filter ontop of the already filtered list:

{% highlight python %}

stopwords = set(STOPWORDS)
stopwords.update(["one","will","page","et","al","instead",'still'])

{% endhighlight %}

## Background Color

{% highlight python %}

backgroundlight = "#FAEBD7"

{% endhighlight %}

## Generating WordCloud Visualization

Once we have all the customization ready, we are good to generate the word cloud visualization and save it as an image:

{% highlight python %}


mycloud = WordCloud(font_path=font5, max_words=1000, max_font_size=100, scale = 2, 
                    stopwords=stopwords, mask=mask,random_state = 42,background_color=background_light)

mycloud.generate(text)
mycloud.recolor(color_func=color_func3)
mycloud.to_file('Visualizations/shakespeares_sonnets1.png')

{% endhighlight %}

You could also clone my repo and run the jupyter notebook with some existing color themes, images and fonts. If you find it useful, please also give the repo a star. Hope you enjoy it!


<iframe src="https://ghbtns.com/github-btn.html?user=Ming0217&repo=WordCloud_Visualization&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>    
      



