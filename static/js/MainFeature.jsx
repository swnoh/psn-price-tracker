import React from "react";
import { Carousel } from "react-bootstrap";

const homeImgs = [
  "https://homer.dl.playstation.net/pr/bam-art/685/348/c83fd06d-a61b-4284-8689-325a7a66c66f.jpg",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F641%2F082%2F93c693b3-043d-4cff-953a-520071963a8a.jpg%26dimensions%3D790x250%26price%3D%2499.99%26format%5B%5D%3DPS4%26type%3DBundle%26locale%3Den_CA%26cta%3DPre-Order+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=f1049baa8625d9da5b80831027497b9d39f35358&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F666%2F112%2F6015446c-32c7-4d68-9f89-4a142b3eb16f.png%26dimensions%3D790x250%26price%3D%24129.99%26format%5B%5D%3DPS4%26type%3DBundle%26locale%3Den_CA%26cta%3DPre-Order+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=3d78b909bf3b5f1260bc2264be2321d5a84ee62a&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F181%2F351%2F2f814955-286c-4686-b641-6e90e6275917.jpg%26dimensions%3D790x250%26price%3D%2429.99%26price_plus%3DFree%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DDownload+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=77352d18edc01d0070bde626c2dd144282b97e62&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F642%2F587%2Ff1eabeea-9c38-4b64-9944-9da09346bc4a.jpg%26dimensions%3D790x250%26price%3D%2479.99%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DPre-Order+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=fdd67f52f9584933156f375aa369b1505bc6fe3f&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F448%2F111%2F741987fa-06dd-4162-8ac4-4ec526517099.jpg%26dimensions%3D790x250%26price%3DFree%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DPlay+it+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=629bcfaf245af4b5de8a6c6879d9e3f53ce2b7c2&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F492%2F094%2Fe47e1570-ce7a-46d2-9034-496320b4556d.jpg%26dimensions%3D790x250%26price%3D%2466.99%26price_discount%3D%2426.79%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DBuy+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=ec631b117faa10d582ac914456961e0f5559baa4&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F685%2F312%2Fa582b7b5-45af-4299-8749-fd4abd821362.jpg%26dimensions%3D790x250%26price%3D%2423.99%26format%5B%5D%3DPS4%26type%3DPSN+Game%26locale%3Den_CA%26cta%3DGet+it+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=7f9983cc483b7d41550f568e2c6239a3edafff53&",
  "https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F685%2F314%2Fb1add346-10ed-406e-8c2f-5aea50d48d47.jpg%26dimensions%3D790x250%26price%3D%2426.99%26format%5B%5D%3DPS4%26type%3DPSN+Game%26locale%3Den_CA%26cta%3DBuy+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=cb22abc8349e01c8c52981299ec95afda0ec941d&"
];
class MainFeature extends React.Component {
  render() {
    return (
      <Carousel>
        {homeImgs.map((img, index) => (
          <Carousel.Item key={index}>
            <img width={800} src={img} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MainFeature;
