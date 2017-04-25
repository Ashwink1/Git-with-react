import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default function ListUsers ({usersList, search}) {
    return (
        <div>
          <ul >

              {usersList.length === 0 && search.length ?<li> Not found</li> : usersList.map((item, index) => <li key={index}>

                    <div className="content">
                      <img src={item.avatar_url} width='102' height='102' />
                      <h3>
                        <Link to={"/user/"+item.id}>{item.login}</Link>
                      </h3>
                    </div>

                  </li>
              )}
          </ul>
        </div>
    );
    
}

