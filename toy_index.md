---
title: "¿Por qué 3 o 4 cosas?"
maths: 1
comment: 1
datacamp: 1
layout: page
css: ["index.css"]
---

Hola, leoncita.

<div class="row">

  <div>
    {% include search_form.html %}
  </div>

  <!-- <div class="tag-div" style="margin-top: 1rem;">
    <h2 class="h2-title">Categories</h2>
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
          <a class="tag-chip" href="{{ site.baseurl }}/categories#{{cat[0] | slugify}}{% if test == testup %}_cap{% endif %}"><div class="chip z-depth-1">{{ catego.name }}</div></a>
        {% endif %}
      {% endfor %}
    </div>
  </div> -->

  <!-- <h2 class="h2-title">List of notes</h2> -->

  <div class="thi-columns">
    <ul class="tag-post">
    {% for post in paginator.posts %}
      <a class="post-title" href="{{ site.baseurl }}{{ post.url }}.html">
        <li>
          {{ post.title }} <small class="post-date">{{post.date | date: "%d/%m/%Y"}}</small>
        </li>
      </a>
    {% endfor %}
    </ul>
  </div>

  <div class="col s12 center-align">
    <ul class="pagination">
      <li class="{% unless paginator.previous_page %}disabled{% else %}waves-effect{% endunless %}">
        {% if paginator.previous_page %}
        {% if paginator.previous_page == 1 %}
        <a href="{{site.baseurl}}/">
        {% else %}
        <a href="{{site.baseurl}}/page{{paginator.previous_page}}">
        {% endif %}
        {% else %}
        <a href="#!">
        {% endif %}
          <i class="material-icons">chevron_left</i>
        </a>
      </li>
      {% if paginator.page == 1 %}
      <li class="active teal">
        <a href="#!">1</a>
      {% else %}
      <li class="waves-effect">
        <a href="{{site.baseurl}}/">1</a>
      {% endif %}
      </li>
      {% for count in (2..paginator.total_pages) %}
      {% if count == paginator.page %}
      <li class="active teal"><a href="#!">{{count}}</a></li>
      {% else %}
      <li class="waves-effect"><a href="{{site.baseurl}}/page{{count}}">{{count}}</a></li>
      {% endif %}
      {% endfor %}
      <li class="{% unless paginator.next_page %}disabled{% else %}waves-effect{% endunless %}">
        {% if paginator.next_page %}
        <a href="{{site.baseurl}}/page{{paginator.next_page}}">
        {% else %}
        <a href="#!">
        {% endif %}
          <i class="material-icons">chevron_right</i>
        </a>
      </li>
    </ul>
  </div>

  <div class="tag-div">
    <h2 class="h2-title">Tags</h2>
    <div class="tag-list">
      {% for tag in site.tags %}
        {% capture test %}{{tag[0] | slice: 0}}{% endcapture %}
        {% capture testup %}{{tag[0] | slice: 0 | upcase}}{% endcapture %}
        <a class="tag-chip" href="{{ site.baseurl }}/tags#{{tag[0] | slugify}}{% if test == testup %}_cap{% endif %}"><div class="chip z-depth-1">{{tag[0]}}</div></a>
      {% endfor %}
    </div>
  </div>
  
</div>

