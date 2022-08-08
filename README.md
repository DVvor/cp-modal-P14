# Introduction
This is a simple react modal

![Alt text](/src/img/example-modal.png)

## Installation

To install, you can use [npm](https://npmjs.org/):


    $ npm i @dvor77/cpmodal
    
    
 
## Examples

Here is a simple example of react modal being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import React from 'react';
import MyModal from '@dvor77/cpmodal';
import { useState } from 'react';



function YourComponent() {
  const [opened, setOpened] = useState(false);
  
  const title = "Congratulations" // Write your own title
  const subtitle = "The form is registered" // Write your own subtitle
  
  // add this function inside your react component to manage the closing of component
  function closeModal() {
    setOpened(false)
  }

  return (
    <div>
      <MyModal opened={opened} closeModal={closeModal} title={title} subtitle={subtitle}/>
    </div>
  );
}

export default YourComponent;
```
