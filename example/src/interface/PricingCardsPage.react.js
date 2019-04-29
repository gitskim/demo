// @flow

import * as React from "react";

import { Page, Grid, PricingCard, Form } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";
import { Calendar, DateRange } from "react-date-range";

function handleSelect(date) {
  console.log(date); // Momentjs object
}

function PricingCardsPage(): React.Node {

  return (
    <SiteWrapper>
      <Page.Content title="Please choose items">
        <Grid.Row>
          <Grid.Col sm={6} lg={6}>
            {/*<Form.Group label="Pick what you want">*/}
            <Form.Group>
              <Form.ImageCheck>
                <Form.ImageCheckItem
                  value={1}
                  imageURL="/demo/photos/nathan-anderson-316188-500.jpg"
                />
                <Form.ImageCheckItem
                  value={2}
                  imageURL="/demo/photos/nathan-dumlao-287713-500.jpg"
                />
                <Form.ImageCheckItem
                  value={3}
                  imageURL="./demo/photos/nicolas-picard-208276-500.jpg"
                />

                <Form.ImageCheckItem
                  value={4}
                  imageURL="./demo/photos/oskar-vertetics-53043-500.jpg"
                />
                <Form.ImageCheckItem
                  value={5}
                  imageURL="./demo/photos/priscilla-du-preez-181896-500.jpg"
                />
                <Form.ImageCheckItem
                  value={6}
                  imageURL="./demo/photos/ricardo-gomez-angel-262359-500.jpg"
                />

                <Form.ImageCheckItem
                  value={7}
                  imageURL="./demo/photos/sam-ferrara-136526-500.jpg"
                />
                <Form.ImageCheckItem
                  value={8}
                  imageURL="./demo/photos/sean-afnan-244576-500.jpg"
                />
                <Form.ImageCheckItem
                  value={9}
                  imageURL="./demo/photos/sophie-higginbottom-133982-500.jpg"
                />
              </Form.ImageCheck>
            </Form.Group>
          </Grid.Col>
          <Grid.Col sm={6} lg={6}>
            <DateRange
            />
            <div>
              <br/>
              <h1>Grand total: $200</h1>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default PricingCardsPage;
