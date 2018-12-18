# ngx-typed-js

An Angular integration for [Typed.js](https://github.com/mattboldt/typed.js/).

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

[![NPM](https://nodei.co/npm/ngx-typed-js.png)](https://nodei.co/npm/ngx-typed-js/)

[Live demo](https://vlad.vidac.software/) - [Source code](https://github.com/thevladeffect/portfolio)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#examples)

# Installation

```
npm install --save ngx-typed-js
```

## Import in your module
```javascript
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  imports: [
    NgxTypedJsModule,
  ],
})
export class AppModule {
}

```

# Usage
To start using it add the `ngx-typed-js` component to your template and pass the text, which should be typed to the `strings` input. In addition you need to pass an element with the class `typing` to the component tag.


```html
<ngx-typed-js [strings]="['Bananas are awesome', 'Nobody can argue this fact.']">
  <h1 class="typing"></h1>
</ngx-typed-js>
```

The `typing` class also allows you to just animate certain parts of a string:
```html
<ngx-typed-js [strings]="['amazing.', 'yellow.', 'delicious.']" [shuffle]="true" [typeSpeed]="40">
  Bananas are <span class="typing"></span>
</ngx-typed-js>
```

## Accessing methods exposed by vanilla Typed.js
You can access the methods on your `Typed` object by using a `@ViewChild` decorator:
```javascript
  @ViewChild(NgxTypedJsComponent) typed: NgxTypedJsComponent;
```

## Properties
You can make use of the following properties in order to customize your typing experience:

| Property             | Type    | Description                                                          | Usage                                                           |
|----------------------|---------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| strings              | Array   | strings to be typed                                                  | `[strings]="['Text 1', 'Text 2']"`                              |
| stringsElement       | String  | ID of element containing string children                             | `[stringsElement]="'myId'"`                                     |
| typeSpeed            | Number  | type speed in milliseconds                                           | `[typeSpeed]="50"`                                              |
| startDelay           | Number  | time before typing starts in milliseconds                            | `[startDelay]="1000"`                                           |
| backSpeed            | Number  | backspacing speed in milliseconds                                    | `[backSpeed]="10"`                                              |
| smartBackspace       | Boolean | only backspace what doesn't match the previous string                | `[smartBackspace]="true"`                                       |
| shuffle              | Boolean | shuffle the strings                                                  | `[shuffle]="true"`                                              |
| backDelay            | Number  | time before backspacing in milliseconds                              | `[backDelay]="100"`                                             |
| fadeOut              | Boolean | Fade out instead of backspace                                        | `[fadeOut]="true"`                                              |
| fadeOutClass         | String  | css class for fade animation                                         | `[fadeOutClass]="'fadeOutClass'"`                               |
| fadeOutDelay         | Boolean | fade out delay in milliseconds                                       | `[fadeOutDelay]="true"`                                         |
| loop                 | Boolean | loop strings                                                         | `[loop]="true"`                                                 |
| loopCount            | Number  | amount of loops                                                      | `[loopCount]="3"`                                               |
| showCursor           | Boolean | show cursor                                                          | `[showCursor]="true"`                                           |
| cursorChar           | String  | character for cursor                                                 | `[cursorChar]="'_'"`                                            |
| autoInsertCss        | Boolean | insert CSS for cursor and fadeOut into HTML                          | `[autoInsertCss]="true"`                                        |
| attr                 | String  | attribute for typing Ex: input placeholder, value, or just HTML text | `[attr]="'placeholder'"`                                        |
| bindInputFocusEvents | Boolean | bind to focus and blur if el is text input                           | `[bindInputFocusEvents]="true"`                                 |
| contentType          | String  | 'html' or 'null' for plaintext                                       | `[contentType]="'html'"`                                        |


These are the same properties used with vanilla Typed.js. For more information about them check out the original project.
In addition to the original properties I have added a new one: `cursorColor`. This takes the value of a CSS color string (e.g. `[color]="red"`, `[color]="#fff"`). 
By default, the cursor color and size will be set to the values of computed styles of the passed `.typing` element.

## Events
You can listen to the following events:

| Event                  | Description                                                          | Usage                                                           |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------|
| completed              | All typing is complete                                               | `(completed)="doSmth()"`                                        |
| preStringTyped         | Before each string is typed                                          | `(preStringTyped)="doSmth(indexOfString)"`                      |
| stringTyped            | After each string is typed                                           | `(stringTyped)="doSmth(indexOfString)"`                         |
| lastStringBackspaced   | During looping, after last string is typed                           | `(lastStringBackspaced)="doSmth()"`                             |
| typingPaused           | Typing has been stopped                                              | `(typingPaused)="doSmth(indexOfString)"`                        |
| typingResumed          | Typing has been started after being stopped                          | `(typingResumed)="doSmth(indexOfString)"`                       |
| reset                  | After reset                                                          | `(reset)="doSmth()"`                                            |
| stopped                | After stop                                                           | `(stopped)="doSmth(indexOfString)"`                             |
| started                | After start                                                          | `(started)="doSmth(indexOfString)"`                             |
| destroyed              | After destroy                                                        | `(destroyed)="doSmth()"`                                        |


# Examples

```html
<!-- infinite loop -->
<ngx-typed-js [strings]="['awesome', 'amazing']" [loop]="true" (completed)="doSmth()">
  <h2>We are an <span class="typing"></span> company!</h2>
</ngx-typed-js>

<!-- type pausing -->
<ngx-typed-js [strings]="['This is text ^1000 which gets paused for 1 second']">
  <h2 class="typing"></h2>
</ngx-typed-js>
```

## Thank you
Big thanks to the author of [vue-typed-js](https://github.com/Orlandster/vue-typed-js) from which I inspired heavily and of course to the original author of [Typed.js](https://github.com/mattboldt/typed.js/).

Contributions are welcome.

# License
[MIT](https://opensource.org/licenses/MIT)
