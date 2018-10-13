import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Header, Grid, Icon, List, Divider, Segment } from "semantic-ui-react";

import Layout from "../components/layout";
import ContactItem from "../components/contacts/contactItem";

const Contacts = () => (
  <Layout>
    <Header>Kontakt</Header>
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header subheader>Produkce</Header>
            <ContactItem
              name="Luděk Lopour"
              email="lopour@sisky.cz"
              phone="+420 603 300 792"
            />
            <Divider />
            <ContactItem
              name="Ivana Březková"
              email="brezkova@sisky.cz"
              phone="+420 733 579 613"
            />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header subheader>Grafika</Header>
            <ContactItem email="grafika@sisky.cz" phone="+420 604 433 777" />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header subheader>Kancelář a tisk</Header>
            <List>
              <List.Item
                icon="phone"
                content={<a href="tel:+420733579613 ">+420 733 579 613 </a>}
              />
              <List.Item
                icon="building"
                content={
                  <>
                    nám. Republiky 151/21
                    <br />
                    591 01 Žďár nad Sázavou
                  </>
                }
              />
              <List.Item
                icon="map marker alternate"
                content={
                  <a href="https://goo.gl/maps/jFj9Qm4DJgB2">Ukázat na mapě</a>
                }
              />
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header subheader>Sídlo</Header>
            <List>
              <List.Item
                icon="building"
                content={
                  <>
                    Hamry nad Sázavou 116
                    <br />
                    591 01 Žďár nad Sázavou
                  </>
                }
              />
            </List>
            <Divider />
            IČ: 64421082
            <br />
            DIČ: CZ7012144810
            <br />
            Plátce DPH
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default Contacts;
