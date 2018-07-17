import uuid from "uuid";

const mockData = [
  {
    id: uuid(),
    category_name: "Deals",
    titleItem: [
      {
        id: uuid(),
        title_name: "Anthem™ Legion of Dawn Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA05364_00-ANTHEM1DLXPREORD/1531245600000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Days Gone",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP9000-CUSA08966_00-DAYSGONECOMPLETE/1523372361000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Just Cause 4 - Gold Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0082-CUSA09254_00-JC4GOLDPRE000001/1531245543000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Battlefield™ V",
        thumb_img_url:
          "http://apollo2.dl.playstation.net/cdn/UP0006/CUSA08724_00/IEQMBEkVBkiHJCLlbNs2csihNDKPO5Pw.png"
      },
      {
        id: uuid(),
        title_name: "Assassin's Creed® Odyssey",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA09311_00-DYNCANADELUXE000/1531245581000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "EA SPORTS™ UFC® 3 ICON Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA06536_00-UFC3ICONSEDITION/1531170702000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "NOBUNAGA'S AMBITION: Taishi Deluxe Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4108-CUSA12058_00-HDDBOOTDDX000001/1530632553000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "World of Tanks - Star Spangled Duo",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0680-CUSA02724_00-STSPDU0000000000/1531270638000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Blade Dancer™: Lineage of Light",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1063-ULUS10124_00-BLADEDANCER00001/1527607018000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Dragon's Crown Pro",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2611-CUSA10454_00-DRAGONSCROWNPRO1/1531240535000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Tom Clancy’s Ghost Recon® Wildlands Deluxe Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWDELUXEBUNDLE0/1531170589000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Undertale",
        thumb_img_url:
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
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0102-CUSA07713_00-0000000000000000/1530028858000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Celeste",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2120-CUSA11302_00-CELESTEXXCELESTE/1530029050000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Moss",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1983-CUSA09290_00-MOSSGAME00000000/1530649598000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "SHADOW OF THE COLOSSUS",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP9000-CUSA08034_00-SOTC0000000000US/1530029198000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "DRAGON BALL FIGHTERZ",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA09072_00-DBPROJECTZGOKU18/1529450124000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "A Way Out",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0006-CUSA07995_00-HAZELIGHTAWAYOUT/1530029028000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Human Fall Flat",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4395-CUSA07215_00-HUMANFF00SIEAPS4/1530635396000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Sine Mora EX",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4389-CUSA08149_00-SINEMORA0DE0US00/1531245395000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "SmuggleCraft",
        thumb_img_url:
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
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1063-ULUS10124_00-BLADEDANCER00001/1527607018000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Dragon's Crown Pro",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2611-CUSA10454_00-DRAGONSCROWNPRO1/1531240535000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Tom Clancy’s Ghost Recon® Wildlands Deluxe Edition",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWDELUXEBUNDLE0/1531170589000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Undertale",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3893-CUSA08801_00-TFSHVCUTPS400084/1528210738000/image?w=700&h=700&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "LUMINES REMASTERED SOUNDTRACK SAMPLER",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0751-CUSA12360_00-PROJECTSHAKEOST1/1531241160000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Rocksmith® 2014 - Run-D.M.C. Song Pack",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-BLUS31182_00-RS002PACK0000252/1531240868000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Extinction: Skybound Sentinel",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4735-CUSA11530_00-0000000000000006/1531245650000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      },
      {
        id: uuid(),
        title_name: "Bomber Crew Secret Weapons",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4395-CUSA10423_00-BOMBERCREWSECRET/1531240870000/image?w=496&h=496&bg_color=000000&opacity=100&_version=00_09_000"
      }
    ]
  },
  {
    id: uuid(),
    category_name: "Popluar",
    titleItem: [
      {
        id: "/en-ca/product/UP0001-CUSA02902_00-GRWGOLDEDITION00",
        title_name:
          "Tom Clancy\u2019s Ghost Recon\u00ae Wildlands Gold Edition",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA02902_00-GRWGOLDEDITION00",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWGOLDEDITION00/1531170772000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA02902_00-GRWGOLDEDITION00"
      },
      {
        id: "/en-ca/product/UP4433-NPUB31419_00-TRIALUPGRADE0001",
        title_name: "Minecraft: PlayStation\u00ae3 Edition",
        title_url:
          "https://store.playstation.com/en-ca/product/UP4433-NPUB31419_00-TRIALUPGRADE0001",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4433-NPUB31419_00-TRIALUPGRADE0001/1529535144000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4433-NPUB31419_00-TRIALUPGRADE0001"
      },
      {
        id: "/en-ca/product/UP0001-CUSA01317_00-ASOBOMONOPFFP000",
        title_name: "Monopoly Family Fun Pack",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA01317_00-ASOBOMONOPFFP000",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01317_00-ASOBOMONOPFFP000/1531170749000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01317_00-ASOBOMONOPFFP000"
      },
      {
        id: "/en-ca/product/UP0001-CUSA01023_00-RISKGAMEPS400002",
        title_name: "RISK",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA01023_00-RISKGAMEPS400002",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01023_00-RISKGAMEPS400002/1527005037000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01023_00-RISKGAMEPS400002"
      },
      {
        id: "/en-ca/product/UP0102-CUSA06809_00-DISNEYLEGCOLLPS4",
        title_name: "The Disney Afternoon Collection",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0102-CUSA06809_00-DISNEYLEGCOLLPS4",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0102-CUSA06809_00-DISNEYLEGCOLLPS4/1527005175000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0102-CUSA06809_00-DISNEYLEGCOLLPS4"
      },
      {
        id: "/en-ca/product/UP4064-NPUB31085_00-000000000000BASE",
        title_name: "Alien Breed",
        title_url:
          "https://store.playstation.com/en-ca/product/UP4064-NPUB31085_00-000000000000BASE",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4064-NPUB31085_00-000000000000BASE/1529368650000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP4064-NPUB31085_00-000000000000BASE"
      },
      {
        id: "/en-ca/product/UP0001-CUSA00692_00-RS2014REMASTERED",
        title_name: "Rocksmith\u00ae 2014 Edition \u2013 Remastered",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA00692_00-RS2014REMASTERED",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA00692_00-RS2014REMASTERED/1531182229000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA00692_00-RS2014REMASTERED"
      },
      {
        id: "/en-ca/product/UP0001-CUSA00221_00-THECREWSCEA00001",
        title_name: "The Crew",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA00221_00-THECREWSCEA00001",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA00221_00-THECREWSCEA00001/1529107595000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA00221_00-THECREWSCEA00001"
      },
      {
        id: "/en-ca/product/UP0700-CUSA05350_00-DBXV2DELUXE00000",
        title_name: "DRAGON BALL XENOVERSE 2 Deluxe Edition",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0700-CUSA05350_00-DBXV2DELUXE00000",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA05350_00-DBXV2DELUXE00000/1531240223000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA05350_00-DBXV2DELUXE00000"
      },
      {
        id: "/en-ca/product/UP0001-CUSA05218_00-FHGAMEPS40000001",
        title_name: "For Honor",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA05218_00-FHGAMEPS40000001",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA05218_00-FHGAMEPS40000001/1531335158000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA05218_00-FHGAMEPS40000001"
      },
      {
        id: "/en-ca/product/UP3864-CUSA10927_00-WIZARDOFLEGENDUS",
        title_name: "Wizard of Legend",
        title_url:
          "https://store.playstation.com/en-ca/product/UP3864-CUSA10927_00-WIZARDOFLEGENDUS",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3864-CUSA10927_00-WIZARDOFLEGENDUS/1529542602000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3864-CUSA10927_00-WIZARDOFLEGENDUS"
      },
      {
        id: "/en-ca/product/UP0001-CUSA01886_00-ZUNEXTPS4PORT001",
        title_name: "ZOMBI",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA01886_00-ZUNEXTPS4PORT001",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01886_00-ZUNEXTPS4PORT001/1527004972000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01886_00-ZUNEXTPS4PORT001"
      },
      {
        id: "/en-ca/product/UP0700-CUSA08692_00-DARKSOULSHD00000",
        title_name: "DARK SOULS\u2122: REMASTERED",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0700-CUSA08692_00-DARKSOULSHD00000",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA08692_00-DARKSOULSHD00000/1530029179000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0700-CUSA08692_00-DARKSOULSHD00000"
      },
      {
        id: "/en-ca/product/UP1003-CUSA05333_00-SKYRIMHDFULLGAME",
        title_name: "The Elder Scrolls V: Skyrim Special Edition",
        title_url:
          "https://store.playstation.com/en-ca/product/UP1003-CUSA05333_00-SKYRIMHDFULLGAME",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1003-CUSA05333_00-SKYRIMHDFULLGAME/1531245644000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1003-CUSA05333_00-SKYRIMHDFULLGAME"
      },
      {
        id: "/en-ca/product/UP2124-CUSA00498_00-THEWITNESSPS4PS4",
        title_name: "The Witness",
        title_url:
          "https://store.playstation.com/en-ca/product/UP2124-CUSA00498_00-THEWITNESSPS4PS4",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2124-CUSA00498_00-THEWITNESSPS4PS4/1530029552000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP2124-CUSA00498_00-THEWITNESSPS4PS4"
      },
      {
        id: "/en-ca/product/UP0001-CUSA01810_00-B000000000001714",
        title_name: "Tom Clancy\u2019s The Division\u2122 Gold Edition",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0001-CUSA01810_00-B000000000001714",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01810_00-B000000000001714/1530636080000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-CUSA01810_00-B000000000001714"
      },
      {
        id: "/en-ca/product/UP3643-CUSA00911_00-00000BROFORCEPS4",
        title_name: "Broforce",
        title_url:
          "https://store.playstation.com/en-ca/product/UP3643-CUSA00911_00-00000BROFORCEPS4",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3643-CUSA00911_00-00000BROFORCEPS4/1527285975000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP3643-CUSA00911_00-00000BROFORCEPS4"
      },
      {
        id: "/en-ca/product/UP0292-CUSA07143_00-BULLETSTORMFCELE",
        title_name: "Bulletstorm: Full Clip Edition Duke Nukem Bundle",
        title_url:
          "https://store.playstation.com/en-ca/product/UP0292-CUSA07143_00-BULLETSTORMFCELE",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0292-CUSA07143_00-BULLETSTORMFCELE/1529942588000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0292-CUSA07143_00-BULLETSTORMFCELE"
      },
      {
        id: "/en-ca/product/UP1060-CUSA06983_00-MEGATONRAINFALL0",
        title_name: "Megaton Rainfall",
        title_url:
          "https://store.playstation.com/en-ca/product/UP1060-CUSA06983_00-MEGATONRAINFALL0",
        thumb_img_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1060-CUSA06983_00-MEGATONRAINFALL0/1527005087000/image?w=248&h=248&bg_color=000000&opacity=100&_version=00_09_000 2x",
        api_url:
          "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP1060-CUSA06983_00-MEGATONRAINFALL0"
      }
    ]
  }
];

export default mockData;
