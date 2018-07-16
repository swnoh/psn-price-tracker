import uuid from "uuid";

const mockData = [
  {
    id: uuid(),
    category_name: "Deals",
    titleItem: [
      {
        id: uuid(),
        title_name: "Anthem™ Legion of Dawn Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA05364_00-ANTHEM1DLXPREORD/1531245600000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Days Gone",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP9000-CUSA08966_00-DAYSGONECOMPLETE/1523372361000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Just Cause 4 - Gold Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0082-CUSA09254_00-JC4GOLDPRE000001/1531245543000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Battlefield™ V",
        url:
          "http://apollo2.dl.playstation.net/cdn/UP0006/CUSA08724_00/IEQMBEkVBkiHJCLlbNs2csihNDKPO5Pw.png"
      },
      {
        id: uuid(),
        title_name: "Assassin's Creed® Odyssey",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA09311_00-DYNCANADELUXE000/1531245581000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "EA SPORTS™ UFC® 3 ICON Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA06536_00-UFC3ICONSEDITION/1531170702000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "NOBUNAGA'S AMBITION: Taishi Deluxe Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4108-CUSA12058_00-HDDBOOTDDX000001/1530632553000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "World of Tanks - Star Spangled Duo",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0680-CUSA02724_00-STSPDU0000000000/1531270638000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Blade Dancer™: Lineage of Light",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1063-ULUS10124_00-BLADEDANCER00001/1527607018000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Dragon's Crown Pro",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2611-CUSA10454_00-DRAGONSCROWNPRO1/1531240535000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Tom Clancy’s Ghost Recon® Wildlands Deluxe Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWDELUXEBUNDLE0/1531170589000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Undertale",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3893-CUSA08801_00-TFSHVCUTPS400084/1528210738000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      }
    ]
  },
  {
    id: uuid(),
    category_name: "Editor's Choice 2018",
    titleItem: [
      {
        id: uuid(),
        title_name: "MONSTER HUNTER: WORLD™",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0102-CUSA07713_00-0000000000000000/1530028858000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Celeste",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2120-CUSA11302_00-CELESTEXXCELESTE/1530029050000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Moss",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1983-CUSA09290_00-MOSSGAME00000000/1530649598000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "SHADOW OF THE COLOSSUS",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP9000-CUSA08034_00-SOTC0000000000US/1530029198000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "DRAGON BALL FIGHTERZ",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA09072_00-DBPROJECTZGOKU18/1529450124000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "A Way Out",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA07995_00-HAZELIGHTAWAYOUT/1530029028000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Human Fall Flat",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4395-CUSA07215_00-HUMANFF00SIEAPS4/1530635396000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Sine Mora EX",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4389-CUSA08149_00-SINEMORA0DE0US00/1531245395000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "SmuggleCraft",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0836-CUSA07245_00-0000000000000001/1522868164000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      }
    ]
  },
  {
    id: uuid(),
    category_name: "New This Week",
    titleItem: [
      {
        id: uuid(),
        title_name: "Blade Dancer™: Lineage of Light",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1063-ULUS10124_00-BLADEDANCER00001/1527607018000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Dragon's Crown Pro",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2611-CUSA10454_00-DRAGONSCROWNPRO1/1531240535000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Tom Clancy’s Ghost Recon® Wildlands Deluxe Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWDELUXEBUNDLE0/1531170589000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Undertale",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3893-CUSA08801_00-TFSHVCUTPS400084/1528210738000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "LUMINES REMASTERED SOUNDTRACK SAMPLER",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0751-CUSA12360_00-PROJECTSHAKEOST1/1531241160000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Rocksmith® 2014 - Run-D.M.C. Song Pack",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-BLUS31182_00-RS002PACK0000252/1531240868000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Extinction: Skybound Sentinel",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4735-CUSA11530_00-0000000000000006/1531245650000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Bomber Crew Secret Weapons",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4395-CUSA10423_00-BOMBERCREWSECRET/1531240870000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      }
    ]
  },
  {
    id: uuid(),
    category_name: "Popluar",
    titleItem: [
      {
        id: uuid(),
        title_name: "God of War",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP9000-CUSA07408_00-00000000GODOFWAR/1530649641000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Conan Exiles",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1850-CUSA10608_00-CONANEXILES00001/1531270165000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Darksiders Warmastered Edition",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4389-CUSA05347_00-DARKSIDERSDENA01/1531245640000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Grand Theft Auto V",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1004-CUSA00419_00-GTAVDIGITALDOWNL/1531244983000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Gang Beasts",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2154-CUSA04794_00-GANGBEASTSPS04NA/1530028958000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "UNO®",
        url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA04071_00-UBISOFTUNOFULL00/1527005111000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      }
    ]
  }
];

export default mockData;
