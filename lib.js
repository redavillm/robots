const createRobot = (robotName, wrapper) => {
    const imgEl=document.createElement('img');
    // const src=`http://robohash.org/${robotName}.png`;
    const src=`https://i.pravatar.cc/150?u=${robotName}`;    
    imgEl.setAttribute('src', src);
    wrapper.append(imgEl);
}
