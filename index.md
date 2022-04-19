---
maths: 1
comment: 1
datacamp: 1
layout: page
css: ["index.css"]
---
&nbsp;

Bienvenidos a la web de simulaciones.

Esta página aún está en construcción, pero te invito a visitar las simulaciones que hemos preparado para ti.

<!-- 

&nbsp;

<div class="divider"></div>

<h2 class="h2-title">Categorías</h2>
<div class="row">
<div class="col s12 tag-div">
  <div class="tag-list">
    {% for cat in site.categories %}
      {% for catDat in site.data.categories %}
        {% if catDat.slug == cat[0] %}
          {% assign catego = catDat %}
        {% endif %}
      {% endfor %}
      {% if catego %}
        {% capture test %}{{cat[0] | slice: 0}}{% endcapture %}
        {% capture testup %}{{cat[0] | slice: 0 | upcase}}{% endcapture %}
        <a class="tag-chip" href="#{{cat[0] | slugify}}{% if test == testup %}_cap{% endif %}"><div class="chip z-depth-1">{{ catego.name }}</div></a>
      {% endif %}
    {% endfor %}
  </div>  
  <div class="cat-index">
    {% for cat in site.categories %}
      {% for catDat in site.data.categories %}
        {% if catDat.slug == cat[0] %}
          {% assign catego = catDat %}
        {% endif %}
      {% endfor %}
      {% if catego %}
        {% capture test %}{{cat[0] | slice: 0}}{% endcapture %}
        {% capture testup %}{{cat[0] | slice: 0 | upcase}}{% endcapture %}
        <div class="tag-sec" id="{{cat[0] | slugify}}{% if test == testup %}_cap{% endif %}">
          <h3 class="cat-tag" class="text-cap">{{ catego.name }}</h3>
          <div class="thi-columns">
              <ul class="tag-post">
                {% for post in cat[1] %}
                <a class="post-title" href="{{site.baseurl}}{{post.url}}">
                  <li>
                    {{post.title}}
                    <small class="post-date">{{post.date | date_to_string}}</small>
                  </li>
                </a>
                {% endfor %}
              </ul>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>
</div>

<div class="divider"></div>

<div class="row">
  <div class="tag-div">
    <h2 class="h2-title">Etiquetas</h2>
    <div class="tag-list">
      {% for tag in site.tags %}
        {% capture test %}{{tag[0] | slice: 0}}{% endcapture %}
        {% capture testup %}{{tag[0] | slice: 0 | upcase}}{% endcapture %}
        <a class="tag-chip" href="{{ site.baseurl }}/tags#{{tag[0] | slugify}}{% if test == testup %}_cap{% endif %}"><div class="chip z-depth-1">{{tag[0]}}</div></a>
      {% endfor %}
    </div>
  </div>  
</div>

<div class="divider"></div>

<h2 class="h2-title">Todos los posts</h2>
<div class="thi-columns">
<ul class="tag-post">
{% for post in site.posts %}
  <a class="post-title" href="{{ site.baseurl }}{{ post.url }}">
    <li>
      {{ post.title }} <small class="post-date">{{post.date | date: "%d/%m/%Y"}}</small>
    </li>
  </a>
{% endfor %}
</ul>
</div>

-->