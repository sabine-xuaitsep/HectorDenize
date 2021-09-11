# HectorDenize
## FrontEnd Framework

A fully responsive HTML5 + CSS3 (& some JS) framework designed by SaBiNeXuaiTseP.

The mind map documentation is available online at [GitMind HectorDenize](https://gitmind.com/app/doc/8fa3679125) : *CSS class names, variables, mixins and placeholders used are listed*

---

### Helpers
**CSS class names and other usage information**

#### ***_TYPOGRAPHY*** CORE

>     .title0
>     .title1
>     .title2
>     .title3
>     .title4
>     .title5
>     .title6
>
>     .subtitle1
>     .subtitle2
>     .subtitle3
>     .subtitle4
>     .subtitle5
>     .subtitle6
>
>     .link
>     .nolink


#### ***_SOCIALS*** MODULE

>     .social
>       .icon
>       .icon--alt
>       .label


#### ***_BUTTONS*** MODULE

>     .btn
>     .btn--primary
>     .btn--large
>     .btn--small
>     .btn--fit
>       .icon
>       .disabled


#### ***_PAGENAV*** MODULE

>     .pageNavContainer
>       .pageNav
>         .isActive
>         .inactive


#### ***_LISTS*** LAYOUT

>     .ul--alt


#### ***_TABLES*** LAYOUT

>     .table--alt


#### ***_BOXES*** LAYOUT

>     .container
>
>     .box
>
>     .colorBox
>       .colorVariableName


#### ***_IMAGES*** LAYOUT

>     .ratioBox
>     .zoomBox


#### ***_GRID*** LAYOUT

>     .grid
>     .grid--no-gap

- *{i}rem === from 1 trough 4*

>         .gap-{i}
>         .gapX-{i}
>         .gapY-{i}

- *{i}px === from 1 trough 10*

>         .gap-{i}px
>         .gapX-{i}px
>         .gapY-{i}px

- *.col{label}, .row{label}, .offset{label} => {label} === from '../core/breakpoints'*
- *{i} = from 1 trough 12*

>     .col-{i}
>     .col-s-{i}
>     .col-m-{i}
>     .col-l-{i}
>     .col-xl-{i}
>     .col-xxl-{i}
>     .col-xxxl-{i}

- *{i} = from 0 trough 11*

>         .offset-{i}
>         .offset-s-{i}
>         .offset-m-{i}
>         .offset-l-{i}
>         .offset-xl-{i}
>         .offset-xxl-{i}
>         .offset-xxxl-{i}

- *{i} = from 1 trough 12*

>     .row-{i}
>     .row-s-{i}
>     .row-m-{i}
>     .row-l-{i}
>     .row-xl-{i}
>     .row-xxl-{i}
>     .row-xxxl-{i}


#### ***_DISPLAY*** LAYOUT

>     .deny
>     .block
>     .inline-block
>     .inline
>     .flex
>     .inline-flex
>     .table
>     .table-cell

- *DENY === display: none;*
- *SHOW === display: block;*

>     .deny     DENY ON ALL
>     .block    SHOW ON ALL

- *{screenSize} = xs, s, m, l, xl, xxl => {screenSize} === from '../core/breakpoints'*

>     .deny-on-{screenSize}-only      DENY ONLY ON $sreenSize
>     .block-on-{$creenSize}-only     SHOW ONLY ON $screenSize
>     .deny-from-{screenSize}         DENY FROM $sreenSize
>     .deny-from-xxxl                 DENY FROM xxxl
>     .block-from-{screenSize}        SHOW FROM $sreenSize
>     .block-from-xxxl                SHOW FROM xxxl
>     .deny-until-{screenSize}        DENY UNTIL $sreenSize
>     .block-until-{screenSize}       SHOW UNTIL $sreenSize


#### ***_UTILS*** LAYOUT

> .splitLine


- *.bckgrnd-{label}, .color-{label} => {label} === from '../core/colors'*

>     .bckgrnd-accent
>     .bckgrnd-white
>     .bckgrnd-pale
>     .bckgrnd-light
>     .bckgrnd-dim
>     .bckgrnd-dusky
>     .bckgrnd-dark
>
>     .color-accent
>     .color-white
>     .color-pale
>     .color-light
>     .color-dim
>     .color-dusky
>     .color-dark


>     .txt-center
>     .txt-left
>     .txt-right
>     .txt-justify
>     .txt-underlined
>     .txt-bold

>     .vAlign-top
>     .vAlign-middle

>     .full-width

>     .float-left
>     .float-right


>     .p-rspnsv === value from '../core/breakpoints'


- *{label} === from '../core/breakpoints'*
- *{i} = from 0 trough 7*

>     .p{label}-{i}           padding: {i}em; 
>         e.g.: p-1       === padding: 1rem from XS screen || ALL screens
>         e.g.: p-l-3     === padding: 3rem from L screen

>     .pY{label}-{i}          padding-top: {i}em; padding-bottom: {i}em;
>     .pX{label}-{i}          padding-left: {i}em; padding-right: {i}em;
>     .pTop{label}-{i}        padding-top: {i}em;
>     .pBtm{label}-{i}        padding-bottom: {i}em;

>     .m{label}-{i}           margin: {i}em;
>     .mY{label}-{i}          margin-top: {i}em; margin-bottom: {i}em;
>     .mX{label}-{i}          margin-left: {i}em; margin-right: {i}em;
>     .mTop{label}-{i}        margin-top: {i}em;
>     .mBtm{label}-{i}        margin-bottom: {i}em;


#### ***_NAV_TRIGGER*** USE

>     #navTrigger
>       .menuBtn
>       .closeMenu
>         .menuIcon
>     #menu

>     <button id="navTrigger" data-target="menu" class="menuBtn" type="button">
>         <i class="menuIcon"></i>
>     </button>
>
>     <div id="menu"><nav> ... </nav></div>


---

The GitHub repository for this project is [GitHub HectorDenize](https://github.com/sabine-xuaitsep/HectorDenize).