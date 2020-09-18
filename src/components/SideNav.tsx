import '../index.css';
import React, { useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

const SideNav = (props: any) => {
  let sidebarobj = useRef(null);

  //toggle the sidebar
  const toggleClick = () => {
    //@ts-ignore
    sidebarobj.toggle();
  };

  const data = [
    {
      nodeId: '01',
      nodeText: 'Home',
      iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02',
      nodeText: 'Administration',
      iconCss: 'icon-thumbs-up-alt icon',
    },

    {
      nodeId: '04',
      nodeText: 'AGSMEIS Loan',
      iconCss: 'icon-th icon',
      nodeChild: [
        {
          nodeId: '04-01',
          nodeText: 'Training Institution',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-02',
          nodeText: 'EDI Operations',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-03',
          nodeText: 'Reports',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-04',
          nodeText: 'MSME',
          iconCss: 'icon-circle-thin icon',
        },
        {
          nodeId: '04-05',
          nodeText: 'AGSMEIS Loan',
          iconCss: 'icon-circle-thin icon',
          nodeChild: [
            {
              nodeId: '04-06',
              nodeText: 'Review Business Plan',
              iconCss: 'icon-circle-thin icon',
            },
            {
              nodeId: '04-06',
              nodeText: 'Register For Training',
              iconCss: 'icon-circle-thin icon',
            },
          ],
        },
        {
          nodeId: '04-04',
          nodeText: 'Funding Institute',
          iconCss: 'icon-circle-thin icon',
        },
      ],
    },
    {
      nodeId: '05',
      nodeText: 'Business Linkages',
      iconCss: 'icon-code icon',
      nodeChild: [],
    },
  ];

  let width = '290px';
  let target = '.main-content';
  let mediaQuery = '(min-width: 600px)';
  let fields: any = {
    dataSource: data,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
  };

  return (
    <div id='wrapper'>
      <div>
        <div className='main-header' id='header-section'>
          <div className='header-left'>
            {/* <ul className='header-list'> */}
            <span
              className='float-left header-style icon-menu'
              id='hamburger'
              onClick={toggleClick}></span>
            <a className='float-left header-style nav-pane text-light' href='/'>
              <b>NIRSAL MFB</b>
            </a>
            {/* </ul> */}
          </div>
          <div className='header-right'>
            <input type='text' placeholder='search' className='global-search' />
            <div className='text-dark'>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <SidebarComponent
          id='sidebar-treeview'
          ref={(Sidebar: any) => (sidebarobj = Sidebar)}
          width={width}
          target={target}
          mediaQuery={mediaQuery}>
          <div className='main-menu'>
            <div>
              <TreeViewComponent
                id='main-treeview'
                fields={fields}
                expandOn='Click'
              />
            </div>
          </div>
        </SidebarComponent>
        <div className='main-content' id='main-text'>
          <div className='sidebar-content' style={{ height: '100vh' }}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
