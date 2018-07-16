import React from "react";
import { Carousel } from "react-bootstrap";

class MainFeature extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            width={1000}
            height={400}
            src="https://homer.dl.playstation.net/pr/bam-art/679/429/3f0c3ace-3bc5-4ddd-921e-c60aba3b4914.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={1000}
            height={400}
            src="https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F448%2F111%2F4ba9e678-9fa6-46e3-ab13-f787ced18699.jpg%26dimensions%3D790x250%26price%3DFree%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DPlay+it+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=8c5ab6b8232a5ffeeed1d3275b011daa568cfc25&"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={1000}
            height={400}
            src="https://image.api.np.km.playstation.net/dis/images/?format=png&image=https%3A%2F%2Fdis.api.np.playstation.net%2Fdis%2Fv1%2Fbanners%3Fbackplate%3Dhttps%3A%2F%2Fhomer.dl.playstation.net%2Fpr%2Fbam-art%2F272%2F352%2F44592b67-85ac-41d6-b310-334363c5ea58.jpg%26dimensions%3D790x250%26price%3D%2439.99%26price_discount%3D%2426.39%26format%5B%5D%3DPS4%26type%3DFull+Game%26locale%3Den_CA%26cta%3DDownload+Now%21%26output%3Dpng%26tpl%3Dbanner-web-store%26store%3Dgame%26region%3Dus%26&sign=36a12ac1a8796af161e86bc45202d2f27d249bb4&"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainFeature;
