# react-native-short-styles

# Installation

`npm install react-native-short-styles`

or

`yarn add react-native-short-styles`

# Example

```jsx
import { Text, View } from "react-native"
import styles from "react-native-short-styles"

// In your any react-native component
;<View style={styles("f1 ic jc")}>
  <Text style={styles("")}></Text>
</View>
```

# Short Styles List

The Listing is in alphabetical order of the properties in each section

## Spacing and Borders

| Property          | ShortStyle |
| :---------------- | :--------: |
| top               |     ot     |
| left              |     ol     |
| right             |     or     |
| bottom            |     ob     |
| start             |     os     |
| end               |     oe     |
| margin            |   -m, m    |
| marginTop         |  -mt, mt   |
| marginLeft        |  -ml, ml   |
| marginBottom      |  -mb, mb   |
| marginRight       |  -mr, mr   |
| marginStart       |  -ms, ms   |
| marginEnd         |  -me, me   |
| marginHorizontal  |  -mh, mh   |
| marginVertical    |  -mv, mv   |
| padding           |     p      |
| paddingTop        |     pt     |
| paddingLeft       |     pl     |
| paddingBottom     |     pb     |
| paddingRight      |     pr     |
| paddingStart      |     ps     |
| paddingEnd        |     pe     |
| paddingHorizontal |     ph     |
| paddingVertical   |     pv     |
| borderWidth       |     b      |
| borderColor       |     bc     |
| borderTopWidth    |     bt     |
| borderTopColor    |    btc     |
| borderLeftWidth   |     bl     |
| borderLeftColor   |    blc     |
| borderBottomWidth |     bb     |
| borderBottomColor |    bbc     |
| borderRightWidth  |     br     |
| borderRightColor  |    brc     |
| borderStartWidth  |     bs     |
| borderStartColor  |    bsc     |
| borderEndWidth    |     be     |
| borderEndColor    |    bec     |

| Property    | Value  | ShortStyle |
| :---------- | :----: | :--------: |
| borderStyle | solid  |    bss     |
|             | dashed |    bsh     |
|             | dotted |    bsd     |

---

## General

| Property        |    Value     | ShortStyle |
| :-------------- | :----------: | :--------: |
| aspectRatio     |      -       |     a      |
| backgroundColor |      -       |     bg     |
| elevation       |      -       |     e      |
| minHeight       |      -       |     hn     |
| height          |      -       |     h      |
| maxHeight       |      -       |     hx     |
| minWidth        |      -       |     wn     |
| width           |      -       |     w      |
| maxWidth        |      -       |     wx     |
| opacity         |      -       |     o      |
| overflow        |    hidden    |     oh     |
|                 |    scroll    |     oc     |
|                 |   visible    |     ov     |
| position        |   absolute   |    poa     |
|                 | **relative** |    por     |

---

## Flex

| Property       |     Value      | ShortStyle |
| :------------- | :------------: | :--------: |
| alignContent   |     center     |     cc     |
|                |    flex-end    |     ce     |
|                |   flex-start   |     cs     |
|                |  space-around  |     ca     |
|                | space-between  |     cb     |
|                |    stretch     |     ct     |
| alignItems     |    baseline    |     ia     |
|                |     center     |     ic     |
|                |    flex-end    |     ie     |
|                |   flex-start   |     is     |
|                |  **stretch**   |     it     |
| alignSelf      |    **auto**    |     ac     |
|                |     center     |     ac     |
|                |    flex-end    |     ae     |
|                |   flex-start   |     as     |
|                |  space-around  |     aa     |
|                | space-between  |     ab     |
|                |    stretch     |     at     |
| flex           |       -        |     f      |
| flexBasis      |       -        |     fb     |
| flexDirection  |   **column**   |     fc     |
|                | column-reverse |    -fc     |
|                |      row       |     fr     |
|                |  row-reverse   |    -fr     |
| flexGrow       |       -        |     fg     |
| flexShrink     |       -        |     fs     |
| flexWrap       |   **nowrap**   |     fn     |
|                |      wrap      |     fw     |
|                |  wrap-reverse  |    -fw     |
| justifyContent |     center     |     jc     |
|                |    flex-end    |     je     |
|                | **flex-start** |     js     |
|                |  space-around  |     ja     |
|                | space-between  |     jb     |

---

## Text

| Property          |   Value    | ShortStyle |
| :---------------- | :--------: | :--------: |
| color             |     -      |     cl     |
| fontSize          |     -      |     ts     |
| fontStyle         |   italic   |    tsi     |
|                   | **normal** |    tsn     |
| fontWeight        |    bold    |     tb     |
|                   | **normal** |     tn     |
| letterSpacing     |     -      |    tls     |
| lineHeight        |     -      |     th     |
| textAlign         |  **auto**  |     ta     |
|                   |   center   |     tc     |
|                   |    left    |     tl     |
|                   |  justify   |     tj     |
|                   |   right    |     tr     |
| textAlignVertical |  **auto**  |    tva     |
|                   |   bottom   |    tvb     |
|                   |   center   |    tvc     |
|                   |    top     |    tvt     |
| textTransform     | capitalize |    ttc     |
|                   | lowercase  |    ttl     |
|                   |  **none**  |    ttn     |
|                   | uppercase  |    ttu     |
