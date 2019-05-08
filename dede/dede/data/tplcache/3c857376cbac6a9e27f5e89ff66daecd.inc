<li class="clearfix"> <a href="[field:arcurl/]" title="[field:title/]">
            <div class="news-date">
              <div class="news-date1">[field:pubdate function="MyDate('d',@me)"/]</div>
              <div class="news-date2">[field:pubdate function="MyDate('Y/m',@me)"/]</div>
            </div>
            <div class="news-bodys">
              <h3>[field:title/]</h3>
              <p>​[field:description function="cn_substr(@me,200)"/]...</p>
            </div>
            </a> </li>