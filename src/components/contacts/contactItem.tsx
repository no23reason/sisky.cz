import React from "react";
import { List } from "semantic-ui-react";

const ContactItem: React.SFC<{
  name?: string;
  email: string;
  phone: string;
}> = props => (
  <List>
    {props.name && <List.Item icon="user" content={props.name} />}
    <List.Item
      icon="phone"
      content={
        <a href={`tel:${props.phone.replace(/\s/g, "")}`}>{props.phone}</a>
      }
    />
    <List.Item
      icon="mail"
      content={<a href={`mailto:${props.email}`}>{props.email}</a>}
    />
  </List>
);

export default ContactItem;
