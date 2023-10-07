# SASS

## SCSS SYNTAX

```css

@minxin button-base() {
    @include typography(button);

    display:inline-flex;
    position:relative;
    height: $button-height;
    border:none;
    vertival-align:middle;

    &:hover 
        cursor:pointer;

}

```

- css 파일을 직접 수정하면 안됨
