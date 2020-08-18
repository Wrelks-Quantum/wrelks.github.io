---
layout: articles
title: Personal Projects
articles:
    data_source: site.other
    show_excerpt: true
    show_readmore: true
    cover_size: sm
show_edit_on_github: false
comment: false

---
<div class="article__content" markdown="1">

## About

If you are not already familiar, my second favorite activity along side quantum computing is embedded systems/circuit design. It's something I've always been very passionate about. I felt as if Wrelks would be a fun place to not only serve as an archive for quantum computing resources and tutorials but also be a place to host some of my personal side projects. Anyways, hope you enjoy, overtime I will add more and more of my personal projects here for you to browse :)

<ul>
  {% for post in site.other %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

---

</div>