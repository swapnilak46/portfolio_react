import React from 'react';

const FitnessHeader = ({ logoSrc, menuItems }) => {
    return (
        <header className="transparent wow fadeInDown" data-wow-delay=".5s">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <a href="index.html">
                                            <img alt="" className="logo" src={logoSrc} />
                                            <img alt="" className="logo-2" src={logoSrc} />
                                        </a>
                                    </div>
                                    {/* logo close */}
                                </div>
                            </div>
                            <div className="de-flex-col header-col-right">
                                <ul id="mainmenu" className="menu-fullwidth">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a className={index === 0 ? "active" : ""} href={item.link}>
                                                {item.name}<span></span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="menu_side_area">
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default FitnessHeader;
