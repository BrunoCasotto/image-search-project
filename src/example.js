import Core from './'

let core = new Core({delay: 500})

core.call('up', 1);
core.call('up', 2);
core.call('up', 3);
core.call('up', 4);
core.call('up', 5);

core.call('down', 2);
core.call('down', 3);
core.call('down', 4);
core.call('down', 5);
