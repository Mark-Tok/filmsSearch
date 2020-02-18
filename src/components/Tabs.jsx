import React from "react";
import ListFilms from './ListFilms';
import { Tab } from 'semantic-ui-react';
import ListSaveFilms from  './ListSaveFilms';

function Tabs() {
  const panes = [
    {
      menuItem: 'Все фильмы',
      render: () => <Tab.Pane attached={false}> <ListFilms /></Tab.Pane>,
    },
    {
      menuItem: 'Закладки',
      render: () => <Tab.Pane attached={false}><ListSaveFilms  /></Tab.Pane>,
    },
  ]

  const Tabs = () => (
    <Tab menu={{ attached: false, tabular: false }} panes={panes} />
  )
  return (
      <div className="tabs-block">
      <Tabs />
      </div>
  )
}

export default Tabs;