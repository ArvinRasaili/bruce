import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return(
            <footer class="text-muted py-5">
            <div class="container">
              <p class="float-end mb-1">
                <a href="#">Back to top</a>
              </p>
              <p class="mb-1">Copy rights reserved &copy;created by Arvind Rasaili</p>
            </div>
          </footer>
        );
    }
}

export default Footer;