
      export default function Page() {
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
      "en_US": "Step 1",
      "ja_JP": "ステップ1",
      "nl_NL": "Stap 1",
      "zh_CN": "步骤1",
      "es_ES": "Paso 1",
      "pl_PL": "Krok 1",
      "tr_TR": "Aşama 1",
      "cs_CZ": "Krok 1",
      "fr_FR": "Étape 1",
      "ko_KR": "1 단계",
      "th_TH": "ขั้นตอนที่ 1",
      "id_ID": "Langkah 1",
      "sv_SV": "Steg 1",
      "ar_AR": "الخطوة 1",
      "he_IL": "שלב 1",
      "pt_PT": "Passo 1",
      "el_GR": "Βήμα 1",
      "pt_BR": "Passo 1",
      "it_IT": "Passo 1",
      "ru_RU": "Шаг 1",
      "de_DE": "Schritt 1",
      "zh_TW": "步驟1",
      "vi_VI": "Bước 1"
    },
    "__i18n_82852802824503296_label": {
      "en_US": "Pixel art preview",
      "ja_JP": "ピクセルアートのプレビュー",
      "nl_NL": "Voorbeeld van pixelkunst",
      "zh_CN": "像素艺术预览",
      "es_ES": "Vista previa del arte de píxeles",
      "pl_PL": "Podgląd grafiki pikseli",
      "tr_TR": "Piksel sanat önizlemesi",
      "cs_CZ": "Náhled pixelového umění",
      "fr_FR": "Aperçu du pixel art",
      "ko_KR": "픽셀 아트 미리보기",
      "th_TH": "การแสดงตัวอย่างศิลปะพิกเซล",
      "id_ID": "Pratinjau seni piksel",
      "sv_SV": "Förhandsvisning av Pixelkonst",
      "ar_AR": "معاينة فن البكسل",
      "he_IL": "תצוגה מקדימה של אמנות פיקסל",
      "pt_PT": "Visualização de pixel art",
      "el_GR": "Προεπισκόπηση εικονοστοιχείων",
      "pt_BR": "Visualização de pixel art",
      "it_IT": "Anteprima della pixel art",
      "ru_RU": "Предварительный просмотр пиксельной графики",
      "de_DE": "Pixel-Art-Vorschau",
      "zh_TW": "像素藝術預覽",
      "vi_VI": "Xem trước nghệ thuật pixel"
    },
    "__i18n_82852802820308992_label": {
      "en_US": "photo upload",
      "ja_JP": "写真のアップロード",
      "nl_NL": "foto uploaden",
      "zh_CN": "照片上传",
      "es_ES": "subir foto",
      "pl_PL": "przesyłanie zdjęć",
      "tr_TR": "fotoğraf yükleme",
      "cs_CZ": "nahrání fotografie",
      "fr_FR": "téléchargement de photos",
      "ko_KR": "사진 업로드",
      "th_TH": "อัพโหลดรูปภาพ",
      "id_ID": "unggahan foto",
      "sv_SV": "foto uppladdning",
      "ar_AR": "رفع صورة",
      "he_IL": "העלאת תמונה",
      "pt_PT": "upload de fotos",
      "el_GR": "μεταφόρτωση φωτογραφίας",
      "pt_BR": "upload de fotos",
      "it_IT": "caricamento di foto",
      "ru_RU": "загрузка фото",
      "de_DE": "Foto-Upload",
      "zh_TW": "照片上傳",
      "vi_VI": "tải ảnh lên"
    },
    "__i18n_82852802820308995_label": {
      "en_US": "photo upload(1)",
      "ja_JP": "写真のアップロード(1)",
      "nl_NL": "foto-upload(1)",
      "zh_CN": "照片上传(1)",
      "es_ES": "subir foto(1)",
      "pl_PL": "przesyłanie zdjęć(1)",
      "tr_TR": "fotoğraf yükleme(1)",
      "cs_CZ": "nahrání fotky (1)",
      "fr_FR": "téléchargement de photos(1)",
      "ko_KR": "사진 업로드(1)",
      "th_TH": "อัพโหลดรูปภาพ(1)",
      "id_ID": "unggah foto(1)",
      "sv_SV": "fotouppladdning (1)",
      "ar_AR": "تحميل الصور(1)",
      "he_IL": "העלאת תמונה (1)",
      "pt_PT": "upload de fotos(1)",
      "el_GR": "μεταφόρτωση φωτογραφίας (1)",
      "pt_BR": "upload de fotos(1)",
      "it_IT": "caricamento foto(1)",
      "ru_RU": "загрузить фото(1)",
      "de_DE": "Foto-Upload(1)",
      "zh_TW": "照片上傳(1)",
      "vi_VI": "tải ảnh lên (1)"
    },
    "__i18n_82852802820308994_label": {
      "en_US": "photo upload(2)",
      "ja_JP": "写真のアップロード(2)",
      "nl_NL": "foto-upload(2)",
      "zh_CN": "照片上传(2)",
      "es_ES": "subir foto(2)",
      "pl_PL": "przesyłanie zdjęć(2)",
      "tr_TR": "fotoğraf yükleme(2)",
      "cs_CZ": "nahrání fotky (2)",
      "fr_FR": "téléchargement de photos(2)",
      "ko_KR": "사진 업로드(2)",
      "th_TH": "อัพโหลดรูปภาพ(2)",
      "id_ID": "unggah foto(2)",
      "sv_SV": "foto uppladdning (2)",
      "ar_AR": "تحميل الصور(2)",
      "he_IL": "העלאת תמונה (2)",
      "pt_PT": "upload de fotos(2)",
      "el_GR": "μεταφόρτωση φωτογραφίας (2)",
      "pt_BR": "upload de fotos(2)",
      "it_IT": "caricamento foto(2)",
      "ru_RU": "загрузка фото(2)",
      "de_DE": "Foto-Upload(2)",
      "zh_TW": "照片上傳(2)",
      "vi_VI": "tải ảnh lên (2)"
    },
    "__i18n_82851760112140288_title": {
      "en_US": "Step 2",
      "ja_JP": "ステップ2",
      "nl_NL": "Stap 2",
      "zh_CN": "第2步",
      "es_ES": "Paso 2",
      "pl_PL": "Krok 2",
      "tr_TR": "Adım 2",
      "cs_CZ": "Krok 2",
      "fr_FR": "Étape 2",
      "ko_KR": "2 단계",
      "th_TH": "ขั้นตอนที่ 2",
      "id_ID": "Langkah 2",
      "sv_SV": "Steg 2",
      "ar_AR": "الخطوة 2",
      "he_IL": "שלב 2",
      "pt_PT": "Passo 2",
      "el_GR": "Βήμα 2",
      "pt_BR": "Passo 2",
      "it_IT": "Passo 2",
      "ru_RU": "Шаг 2",
      "de_DE": "Schritt 2",
      "zh_TW": "第2步",
      "vi_VI": "Bước 2"
    },
    "__i18n_82882524082077696_label": {
      "en_US": "preview",
      "ja_JP": "プレビュー",
      "nl_NL": "voorbeeld",
      "zh_CN": "预览",
      "es_ES": "avance",
      "pl_PL": "zapowiedź",
      "tr_TR": "Ön izleme",
      "cs_CZ": "náhled",
      "fr_FR": "Aperçu",
      "ko_KR": "시사",
      "th_TH": "ดูตัวอย่าง",
      "id_ID": "pratinjau",
      "sv_SV": "förhandsvisning",
      "ar_AR": "معاينة",
      "he_IL": "תצוגה מקדימה",
      "pt_PT": "visualização",
      "el_GR": "προεπισκόπηση",
      "pt_BR": "visualização",
      "it_IT": "anteprima",
      "ru_RU": "предварительный просмотр",
      "de_DE": "Vorschau",
      "zh_TW": "預覽",
      "vi_VI": "xem trước"
    },
    "__i18n_82882524082077698_label": {
      "en_US": "photo upload(3)",
      "ja_JP": "写真のアップロード(3)",
      "nl_NL": "foto-upload(3)",
      "zh_CN": "照片上传(3)",
      "es_ES": "subir foto(3)",
      "pl_PL": "przesyłanie zdjęć(3)",
      "tr_TR": "fotoğraf yükleme(3)",
      "cs_CZ": "nahrání fotky (3)",
      "fr_FR": "téléchargement de photos(3)",
      "ko_KR": "사진 업로드(3)",
      "th_TH": "อัพโหลดรูปภาพ(3)",
      "id_ID": "unggah foto(3)",
      "sv_SV": "foto uppladdning (3)",
      "ar_AR": "تحميل الصور(3)",
      "he_IL": "העלאת תמונה (3)",
      "pt_PT": "upload de fotos(3)",
      "el_GR": "μεταφόρτωση φωτογραφιών (3)",
      "pt_BR": "upload de fotos(3)",
      "it_IT": "caricamento foto(3)",
      "ru_RU": "загрузить фото(3)",
      "de_DE": "Foto-Upload(3)",
      "zh_TW": "照片上傳(3)",
      "vi_VI": "tải ảnh lên(3)"
    }
  },
  "paramErps": [],
  "customizerVersion": "82900851793854464"
};

        return (
          <div className="w-full h-full border bg-green-600">{data.customizerId}</div>
        );
      }
    