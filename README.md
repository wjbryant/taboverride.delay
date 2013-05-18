# taboverride.delay

Delay extension for [Tab Override](https://github.com/wjbryant/taboverride)

Compatible with Tab Override 4.0+

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

Setting the delay to 0 will effectively disable the extension.

```javascript
// don't use any delay
tabOverride.delay(0);
```