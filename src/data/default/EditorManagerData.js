export const editorManagerData = 
{
  romTypeMap:
  {
    fbneo:
    {
      key: "fbneo",
      label: "FBNeo",
      converterKey: "hbMameFBNeoMap" 
    },
    hbmame:
    {
      key: "hbmame",
      label: "HBMame",
      converterKey: "fbneoHBMameMap" 
    }
  },
  fbneoHBMameMap:
  {
    "ff-22m.7h": "c07aec2.p2",
    "ff-23m.8h": "c07eac2.p1"
  },
  hbMameFBNeoMap:
  {
    "c07aec2.p2": "ff-22m.7h",
    "c07eac2.p1": "ff-23m.8h"
  }
}