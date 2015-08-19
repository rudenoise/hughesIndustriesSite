var HI = (function () {
    
    console.log('Hello, fancy meeting you here!\n\nType: HI();');

    var brandStr = [
        '\n',
        '  HH IIIIIIIIII HH  \n',
        '  HH IIIIIIIIII HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HHHHHHHHHHHHHHHH  \n',
        '  HHHHHHHHHHHHHHHH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  \n',
        '  HH     II     HH  Hughes\n',
        '  HH     II     HH  Industries  \n',
        '  HH IIIIIIIIII HH  Ltd\n',
        '  HH IIIIIIIIII HH  Est 2014\n',
        '\n'
    ].join('');
    return function () {
        console.log(brandStr);
        return 'rudenoise@gmail.com';
    };
}());
