
      import Custom from '@/components/Custom';
      const data = {
  "version": 1,
  "customizerId": "82851759843704832",
  "customData": {
    "id": "82851759923396608",
    "uniqueId": "82851759923396608",
    "showLayerTitle": true,
    "enableLayerPopup": true,
    "connects": [
      {
        "color": "#08D36A",
        "source": {
          "id": "82852802820308992",
          "key": "value"
        },
        "target": {
          "id": "82852802824503296",
          "key": "value"
        }
      },
      {
        "color": "#3B82F6",
        "source": {
          "id": "82852802820308995",
          "key": "value"
        },
        "target": {
          "id": "82852802824503296",
          "key": "value"
        }
      },
      {
        "color": "#FACC15",
        "source": {
          "id": "82852802820308994",
          "key": "value"
        },
        "target": {
          "id": "82852802824503296",
          "key": "value"
        }
      },
      {
        "color": "#FF7D00",
        "source": {
          "id": "82882524082077698",
          "key": "value"
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      },
      {
        "color": "#08D36A",
        "source": {
          "id": "82882524082077698",
          "key": "value",
          "index": 1
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      },
      {
        "color": "#3B82F6",
        "source": {
          "id": "82882524082077698",
          "key": "value",
          "index": 2
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      },
      {
        "color": "#FACC15",
        "source": {
          "id": "82882524082077698",
          "key": "value",
          "index": 3
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      },
      {
        "color": "#DC2626",
        "source": {
          "id": "82882524082077698",
          "key": "value",
          "index": 4
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      },
      {
        "color": "#FF7D00",
        "source": {
          "id": "82882524082077698",
          "key": "value",
          "index": 5
        },
        "target": {
          "id": "lt5kmq4x",
          "key": "image"
        }
      }
    ],
    "layers": [
      {
        "id": "82851760103751680",
        "title": "__i18n_82851760103751680_title",
        "enableStep": false,
        "conditions": [],
        "modules": [
          {
            "id": "82852802824503296",
            "type": "preview_pixel",
            "props": {
              "value": {
                "type": "image"
              }
            },
            "config": {
              "label": "__i18n_82852802824503296_label",
              "width": 4,
              "texture": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/modules/pixel-art-preview/lego/origin.png",
              "validate": [],
              "colorRange": 34,
              "pixelRatio": 59,
              "borderWidth": 0,
              "defaultValue": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/modules/upload-image/2024228/6dd0d2f8-67f0-4626-878a-b896b6edf81f.png",
              "propertyName": "pixel-art-preview",
              "notesPosition": 0,
              "enableCondition": false
            },
            "output": {
              "image": {
                "type": "image"
              }
            },
            "position": {
              "x": 1697.3957117750438,
              "y": 0
            }
          },
          {
            "id": "82852802820308992",
            "type": "photo_upload",
            "config": {
              "count": 1,
              "label": "__i18n_82852802820308992_label",
              "width": 2,
              "validate": {
                "required": false
              },
              "columnGird": 1,
              "propertyName": "photo-upload",
              "notesPosition": 0,
              "enableCondition": false
            },
            "output": {
              "value": {
                "type": "image[]"
              },
              "source": {
                "type": "image[]"
              }
            },
            "position": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": "82852802820308995",
            "type": "photo_upload",
            "config": {
              "count": 1,
              "label": "__i18n_82852802820308995_label",
              "width": 2,
              "validate": {
                "required": false
              },
              "columnGird": 1,
              "propertyName": "photo-upload(1)",
              "notesPosition": 0,
              "enableCondition": false
            },
            "output": {
              "value": {
                "type": "image[]"
              },
              "source": {
                "type": "image[]"
              }
            },
            "position": {
              "x": 0,
              "y": 305
            }
          },
          {
            "id": "82852802820308994",
            "type": "photo_upload",
            "config": {
              "count": 1,
              "label": "__i18n_82852802820308994_label",
              "width": 2,
              "validate": {
                "required": false
              },
              "columnGird": 1,
              "propertyName": "photo-upload(2)",
              "notesPosition": 0,
              "enableCondition": false
            },
            "output": {
              "value": {
                "type": "image[]"
              },
              "source": {
                "type": "image[]"
              }
            },
            "position": {
              "x": 0,
              "y": 610
            }
          }
        ]
      },
      {
        "id": "82851760112140288",
        "title": "__i18n_82851760112140288_title",
        "enableStep": false,
        "conditions": [],
        "modules": [
          {
            "id": "82882524082077696",
            "type": "preview",
            "config": {
              "label": "__i18n_82882524082077696_label",
              "width": 4,
              "validate": [],
              "borderWidth": 1,
              "propertyName": "preview",
              "notesPosition": 0,
              "enableCondition": false,
              "previewId": "83143254421274624",
              "knifeId": "82882525013213184"
            },
            "output": {
              "image": {
                "type": "image"
              }
            }
          },
          {
            "id": "82882524082077698",
            "type": "photo_upload",
            "config": {
              "count": 6,
              "label": "__i18n_82882524082077698_label",
              "width": 4,
              "validate": {
                "required": true
              },
              "columnGird": 4,
              "propertyName": "photo-upload(3)",
              "notesPosition": 0,
              "enableCondition": false
            },
            "output": {
              "value": {
                "type": "image[]"
              },
              "source": {
                "type": "image[]"
              }
            },
            "position": {
              "x": 813.5116303615721,
              "y": 410.5038064221253
            }
          }
        ]
      }
    ],
    "functions": []
  },
  "knifes": [
    {
      "id": "82882525013213184",
      "width": 1500,
      "height": 1000,
      "children": [
        {
          "id": "lq4yxnod",
          "top": 291.15,
          "left": 449.28,
          "lock": false,
          "type": "template:image:v2",
          "uuid": "lq4yxnod",
          "angle": 0,
          "cropX": 0,
          "cropY": 0,
          "flipX": false,
          "flipY": false,
          "image": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/designer/resources/lq4yxgo4/20231214/lq4yxmpf.png",
          "title": "900K.png",
          "width": 601.43,
          "height": 417.69,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "backgroundSize": 1,
          "cropWidthRatio": 1,
          "cropHeightRatio": 1,
          "imageOriginWidth": 2000,
          "imageOriginHeight": 1389,
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt5huq2a",
          "top": 291.15,
          "left": -449.28,
          "lock": false,
          "type": "template:image:v2",
          "uuid": "lt5huq2a",
          "angle": 0,
          "cropX": 0,
          "cropY": 0,
          "flipX": false,
          "flipY": false,
          "image": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/designer/resources/lq4yxgo4/20231214/lq4yxmpf.png",
          "title": "900K.png (1)",
          "width": 601.43,
          "height": 417.69,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "backgroundSize": 1,
          "cropWidthRatio": 1,
          "cropHeightRatio": 1,
          "imageOriginWidth": 2000,
          "imageOriginHeight": 1389,
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt5hv7ld",
          "top": -291.15,
          "left": 81.34,
          "lock": false,
          "type": "template:image:v2",
          "uuid": "lt5hv7ld",
          "angle": 0,
          "cropX": 0,
          "cropY": 0,
          "flipX": false,
          "flipY": false,
          "image": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/designer/resources/lq4yxgo4/20231214/lq4yxmpf.png",
          "title": "900K.png (2)",
          "width": 601.43,
          "height": 417.69,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "backgroundSize": 1,
          "cropWidthRatio": 1,
          "cropHeightRatio": 1,
          "imageOriginWidth": 2000,
          "imageOriginHeight": 1389,
          "globalCompositeOperation": "source-over",
          "module": [
            {
              "id": "82882524082077698",
              "key": "value"
            },
            {
              "id": "82882524082077698",
              "key": "value",
              "index": 1
            },
            {
              "id": "82882524082077698",
              "key": "value",
              "index": 2
            },
            {
              "id": "82882524082077698",
              "key": "value",
              "index": 3
            },
            {
              "id": "82882524082077698",
              "key": "value",
              "index": 4
            },
            {
              "id": "82882524082077698",
              "key": "value",
              "index": 5
            }
          ]
        },
        {
          "id": "lt6ni07t",
          "top": 0,
          "fill": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "left": 44.64,
          "lock": false,
          "text": "Your text here",
          "type": "template:text:v2",
          "uuid": "lt6ni07t",
          "align": "center",
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "title": "Your text here",
          "width": 573.81,
          "height": 159.11,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "editable": true,
          "fontBold": false,
          "fontSize": 82.84,
          "vertical": "middle",
          "fontFamily": {
            "id": "35362883877470208",
            "svg": "https://sunzi-cn.maiyuan.online/customeow-beta/font/images/Lato-Regular.png",
            "url": "https://sunzi-cn.maiyuan.online/customeow-beta/font/files/863d271f19b252737917170bbe0b585b31ac415a.ttf",
            "title": "Lato-Regular"
          },
          "fontItalic": false,
          "lineHeight": 1.4,
          "charSpacing": 0,
          "strokeWidth": 0,
          "editingOpacity": 0.1,
          "lockedBoundary": true,
          "manualFontSize": 82.84,
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6ni6dt",
          "top": 96.12,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": -35.61,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6ni6dt",
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "title": "Shape",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6niduy",
          "top": -96.12,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": -47.55,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6niduy",
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "title": "Shape (1)",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6nirf7",
          "top": 38.51,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": 343.18,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6nirf7",
          "angle": 270,
          "flipX": false,
          "flipY": false,
          "title": "Shape (2)",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6nj5bt",
          "top": 8.81,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": -265.01,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6nj5bt",
          "angle": 270,
          "flipX": false,
          "flipY": false,
          "title": "Shape (3)",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6o84de",
          "top": -181.41,
          "fill": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "left": -325.4,
          "lock": false,
          "text": "A",
          "type": "template:text:v2",
          "uuid": "lt6o84de",
          "align": "center",
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "title": "A",
          "width": 93.15,
          "height": 136.28,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "editable": true,
          "fontBold": false,
          "fontSize": 58,
          "vertical": "middle",
          "fontFamily": {
            "id": "35362883877470208",
            "svg": "https://sunzi-cn.maiyuan.online/customeow-beta/font/images/Lato-Regular.png",
            "url": "https://sunzi-cn.maiyuan.online/customeow-beta/font/files/863d271f19b252737917170bbe0b585b31ac415a.ttf",
            "title": "Lato-Regular"
          },
          "fontItalic": false,
          "lineHeight": 1.4,
          "charSpacing": 0,
          "strokeWidth": 0,
          "editingOpacity": 0.1,
          "lockedBoundary": true,
          "manualFontSize": 58,
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6o8qiy",
          "top": -51.34,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": -387.32,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6o8qiy",
          "angle": 270,
          "flipX": false,
          "flipY": false,
          "title": "Shape (4)",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        },
        {
          "id": "lt6o8yey",
          "top": -265.9,
          "fill": {
            "a": 1,
            "b": 175,
            "g": 163,
            "r": 156
          },
          "left": -69.85,
          "lock": false,
          "path": "M6 6H47V47H6V6Z",
          "type": "template:shape:v2",
          "uuid": "lt6o8yey",
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "title": "Shape (5)",
          "width": 951.81,
          "height": 27.63,
          "shadow": "rgba(0, 0, 0, 0) 0 0 0",
          "stroke": {
            "a": 1,
            "b": 0,
            "g": 0,
            "r": 0
          },
          "opacity": 1,
          "originX": "center",
          "originY": "center",
          "visible": true,
          "paintFirst": "fill",
          "strokeWidth": 0,
          "strokeLineCap": "butt",
          "strokeUniform": true,
          "strokeLineJoin": "miter",
          "globalCompositeOperation": "source-over"
        }
      ],
      "previewPic": "https://sunzi-cn.oss-cn-hangzhou.aliyuncs.com/customeow-beta/static/designer/compose/lt6o9lz8/2024229/83d04cce-5a62-4fde-890b-9ea329378c83.png",
      "backgroundSrc": "",
      "backgroundColor": {
        "a": 0,
        "b": 0,
        "g": 0,
        "r": 0
      },
      "backgroundSrcResourceId": "0",
      "type": 2,
      "dpi": 72,
      "colorMode": "rgb",
      "widthUnit": 1500,
      "heightUnit": 1000
    }
  ],
  "previews": [
    {
      "id": "83143254421274624",
      "type": 4
    }
  ],
  "locals": {
    "__i18n_82851760103751680_title": {
      "en_US": "Step 1"
    },
    "__i18n_82852802824503296_label": {
      "en_US": "Pixel art preview"
    },
    "__i18n_82852802820308992_label": {
      "en_US": "photo upload"
    },
    "__i18n_82852802820308995_label": {
      "en_US": "photo upload(1)"
    },
    "__i18n_82852802820308994_label": {
      "en_US": "photo upload(2)"
    },
    "__i18n_82851760112140288_title": {
      "en_US": "Step 2"
    },
    "__i18n_82882524082077696_label": {
      "en_US": "preview"
    },
    "__i18n_82882524082077698_label": {
      "en_US": "photo upload(3)"
    }
  },
  "paramErps": [],
  "customizerVersion": "82900851793854464"
}
;

      export default function Page() {
        return <Custom data={data} />
      };
    