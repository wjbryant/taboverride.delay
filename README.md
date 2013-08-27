# tabOverride.delay

Delay extension for [Tab Override](https://github.com/wjbryant/taboverride) 4.0+

This extension allows for a delay after the textarea receives focus before Tab Override is activated.

## Usage

### Get/Set Delay Amount

The default delay amount is 250ms.

```javascript
// get the current delay amount in milliseconds
var delayTime = tabOverride.delay();
```

```javascript
// set the delay amount in milliseconds
tabOverride.delay(500);
```

Set the delay to 0 to disable the extension.

```javascript
// don't use any delay
tabOverride.delay(0);
```