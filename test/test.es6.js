import expect from 'expect.js';
import date from '../date-and-time';

describe('format', () => {
    it('"YYYY" equals to "2015"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'YYYY')).to.equal('2015');
    });
    it('"YYYY" equals to "1900"', () => {
        let now = new Date(0, 0, 1);
        expect(date.format(now, 'YYYY')).to.equal('1900');
    });
    it('"YYYY" equals to "9999"', () => {
        let now = new Date(9999, 0, 1);
        expect(date.format(now, 'YYYY')).to.equal('9999');
    });
    it('"YYYY" equals to "0101"', () => {
        let now = new Date(101, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'YYYY')).to.equal('0101');
    });
    it('"YYYY" as UTC equals to "XXXX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'YYYY', utc)).to.equal('' + now.getUTCFullYear());
    });
    it('"YY" equals to "15"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'YY')).to.equal('15');
    });
    it('"YY" equals to "00"', () => {
        let now = new Date(0, 0, 1);
        expect(date.format(now, 'YY')).to.equal('00');
    });
    it('"YY" equals to "99"', () => {
        let now = new Date(9999, 0, 1);
        expect(date.format(now, 'YY')).to.equal('99');
    });
    it('"YY" equals to "01"', () => {
        let now = new Date(101, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'YY')).to.equal('01');
    });
    it('"YY" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'YY')).to.equal('' + (now.getUTCFullYear() - 2000));
    });
    it('"Y" equals to "100"', () => {
        let now = new Date(100, 0, 1);
        expect(date.format(now, 'Y')).to.equal('100');
    });
    it('"Y" equals to "1000"', () => {
        let now = new Date(1000, 0, 1);
        expect(date.format(now, 'Y')).to.equal('1000');
    });
    it('"Y" equals to "10000"', () => {
        let now = new Date(10000, 0, 1);
        expect(date.format(now, 'Y')).to.equal('10000');
    });
    it('"MMMM" equals to "January"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'MMMM')).to.equal('January');
    });
    it('"MMMM" equals to "December"', () => {
        let now = new Date(2015, 11, 1);
        expect(date.format(now, 'MMMM')).to.equal('December');
    });
    it('"MMM" equals to "Jan"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'MMM')).to.equal('Jan');
    });
    it('"MMM" equals to "Dec"', () => {
        let now = new Date(2015, 11, 1);
        expect(date.format(now, 'MMM')).to.equal('Dec');
    });
    it('"MM" equals to "01"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'MM')).to.equal('01');
    });
    it('"MM" equals to "12"', () => {
        let now = new Date(2015, 11, 1, 12, 34, 56, 789);
        expect(date.format(now, 'MM')).to.equal('12');
    });
    it('"MM" as UTC equals to "XX"', () => {
        let now = new Date(2015, 10, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'MM', utc)).to.equal('' + (now.getUTCMonth() + 1));
    });
    it('"M" equals to "1"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'M')).to.equal('1');
    });
    it('"M" equals to "12"', () => {
        let now = new Date(2015, 11, 1, 12, 34, 56, 789);
        expect(date.format(now, 'M')).to.equal('12');
    });
    it('"M" as UTC equals to "XX"', () => {
        let now = new Date(2015, 10, 1, 12, 34, 56, 789);
        expect(date.format(now, 'M')).to.equal('' + (now.getUTCMonth() + 1));
    });
    it('"DD" equals to "01"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'DD')).to.equal('01');
    });
    it('"DD" equals to "31"', () => {
        let now = new Date(2015, 0, 31, 12, 34, 56, 789);
        expect(date.format(now, 'DD')).to.equal('31');
    });
    it('"DD" equals to "XX"', () => {
        let now = new Date(2015, 0, 15, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'DD', utc)).to.equal('' + now.getUTCDate());
    });
    it('"D" equals to "1"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'D')).to.equal('1');
    });
    it('"D" equals to "31"', () => {
        let now = new Date(2015, 0, 31, 12, 34, 56, 789);
        expect(date.format(now, 'D')).to.equal('31');
    });
    it('"D" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 15, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'D', utc)).to.equal('' + now.getUTCDate());
    });
    it('"dddd" equals to "Tuesday"', () => {
        let now = new Date(2015, 0, 6, 12, 34, 56, 789);
        expect(date.format(now, 'dddd')).to.equal('Tuesday');
    });
    it('"dddd" equals to "Thursday"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'dddd')).to.equal('Thursday');
    });
    it('"ddd" equals to "Sun"', () => {
        let now = new Date(2015, 0, 4, 12, 34, 56, 789);
        expect(date.format(now, 'ddd')).to.equal('Sun');
    });
    it('"ddd" equals to "Wed"', () => {
        let now = new Date(2015, 0, 7, 12, 34, 56, 789);
        expect(date.format(now, 'ddd')).to.equal('Wed');
    });
    it('"dd" equals to "Fr"', () => {
        let now = new Date(2015, 0, 2, 12, 34, 56, 789);
        expect(date.format(now, 'dd')).to.equal('Fr');
    });
    it('"dd" equals to "Sa"', () => {
        let now = new Date(2015, 0, 3, 12, 34, 56, 789);
        expect(date.format(now, 'dd')).to.equal('Sa');
    });
    it('"HH" equals to "12"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'HH')).to.equal('12');
    });
    it('"HH" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'HH')).to.equal('00');
    });
    it('"HH" equals to "23"', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'HH')).to.equal('23');
    });
    it('"HH" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'HH', utc)).to.equal(('0' + now.getUTCHours()).slice(-2));
    });
    it('"H" equals to "12"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'H')).to.equal('12');
    });
    it('"H" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'H')).to.equal('0');
    });
    it('"H" equals to "23"', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'H')).to.equal('23');
    });
    it('"H" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'H', utc)).to.equal('' + now.getUTCHours());
    });
    it('"hh A" equals to "12 p.m."', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'hh A')).to.equal('12 p.m.');
    });
    it('"hh A" equals to "12 a.m."', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'hh A')).to.equal('12 a.m.');
    });
    it('"hh A" equals to "11 p.m."', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'hh A')).to.equal('11 p.m.');
    });
    it('"hh A" equals to "01 a.m."', () => {
        let now = new Date(2015, 0, 1, 1, 34, 56, 789);
        expect(date.format(now, 'hh A')).to.equal('01 a.m.');
    });
    it('"hh A" equals to "01 p.m."', () => {
        let now = new Date(2015, 0, 1, 13, 34, 56, 789);
        expect(date.format(now, 'hh A')).to.equal('01 p.m.');
    });
    it('"h A" equals to "12 p.m."', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'h A')).to.equal('12 p.m.');
    });
    it('"h A" equals to "12 a.m."', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'h A')).to.equal('12 a.m.');
    });
    it('"h A" equals to "11 p.m."', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'h A')).to.equal('11 p.m.');
    });
    it('"h A" equals to "1 a.m."', () => {
        let now = new Date(2015, 0, 1, 1, 34, 56, 789);
        expect(date.format(now, 'h A')).to.equal('1 a.m.');
    });
    it('"h A" equals to "1 p.m."', () => {
        let now = new Date(2015, 0, 1, 13, 34, 56, 789);
        expect(date.format(now, 'h A')).to.equal('1 p.m.');
    });
    it('"mm" equals to "34"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'mm')).to.equal('34');
    });
    it('"mm" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 12, 0, 56, 789);
        expect(date.format(now, 'mm')).to.equal('00');
    });
    it('"mm" equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 59, 56, 789);
        expect(date.format(now, 'mm')).to.equal('59');
    });
    it('"mm" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 59, 56, 789),
            utc = true;
        expect(date.format(now, 'mm', utc)).to.equal(('0' + now.getUTCMinutes()).slice(-2));
    });
    it('"m" equals to "34"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'm')).to.equal('34');
    });
    it('"m" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 12, 0, 56, 789);
        expect(date.format(now, 'm')).to.equal('0');
    });
    it('"m" equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 59, 56, 789);
        expect(date.format(now, 'm')).to.equal('59');
    });
    it('"m" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 59, 56, 789),
            utc = true;
        expect(date.format(now, 'm', utc)).to.equal('' + now.getUTCMinutes());
    });
    it('"ss" equals to "56"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'ss')).to.equal('56');
    });
    it('"ss" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 0, 789);
        expect(date.format(now, 'ss')).to.equal('00');
    });
    it('"ss" equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 59, 789);
        expect(date.format(now, 'ss')).to.equal('59');
    });
    it('"ss" as UTC equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 59, 789),
            utc = true;
        expect(date.format(now, 'ss', utc)).to.equal(('0' + now.getUTCSeconds()).slice(-2));
    });
    it('"s" equals to "56"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 's')).to.equal('56');
    });
    it('"s" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 0, 789);
        expect(date.format(now, 's')).to.equal('0');
    });
    it('"s" equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 59, 789);
        expect(date.format(now, 's')).to.equal('59');
    });
    it('"s" as UTC equals to "59"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 59, 789),
            utc = true;
        expect(date.format(now, 's', utc)).to.equal('' + now.getUTCSeconds());
    });
    it('"SSS" equals to "789"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'SSS')).to.equal('789');
    });
    it('"SSS" equals to "000"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 0);
        expect(date.format(now, 'SSS')).to.equal('000');
    });
    it('"SSS" equals to "001"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 1);
        expect(date.format(now, 'SSS')).to.equal('001');
    });
    it('"SSS" as UTC equals to "XXX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 10),
            utc = true;
        expect(date.format(now, 'SSS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3));
    });
    it('"SS" equals to "78"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'SS')).to.equal('78');
    });
    it('"SS" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 0);
        expect(date.format(now, 'SS')).to.equal('00');
    });
    it('"SS" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 1);
        expect(date.format(now, 'SS')).to.equal('00');
    });
    it('"SS" as UTC equals to "XX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 9),
            utc = true;
        expect(date.format(now, 'SS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 2));
    });
    it('"S" equals to "7"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'S')).to.equal('7');
    });
    it('"S" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 0);
        expect(date.format(now, 'S')).to.equal('0');
    });
    it('"S" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 1);
        expect(date.format(now, 'S')).to.equal('0');
    });
    it('"S" equals to "X"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'S', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 1));
    });
    it('"Z" matches "+XXXX/-XXXX"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'Z')).to.match(/^[\+-]\d{4}$/);
    });
    it('"Z" as UTC equals to "+0000"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789),
            utc = true;
        expect(date.format(now, 'Z', utc)).to.equal('+0000');
    });
    it('"ddd MMM DD YYYY HH:mm:ss" equals to "Thu Jan 01 2015 12:34:56"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'ddd MMM DD YYYY HH:mm:ss')).to.equal('Thu Jan 01 2015 12:34:56');
    });
    it('"YYYY/MM/DD HH:mm:ss.SSS" equals to "1900/01/01 00:00:00.000"', () => {
        let now = new Date(0, 0, 1);
        expect(date.format(now, 'YYYY/MM/DD HH:mm:ss.SSS')).to.equal('1900/01/01 00:00:00.000');
    });
    it('"YY/MM/DD HH:mm:ss.SSS" equals to "00/01/01 00:00:00.000"', () => {
        let now = new Date(0, 0, 1);
        expect(date.format(now, 'YY/MM/DD HH:mm:ss.SSS')).to.equal('00/01/01 00:00:00.000');
    });
    it('"Y/M/D H:m:s.SSS" equals to "999/1/1 0:0:0.000"', () => {
        let now = new Date(999, 0, 1);
        expect(date.format(now, 'Y/M/D H:m:s.SSS')).to.equal('999/1/1 0:0:0.000');
    });
    it('"dddd, MMMM D, YYYY h A" equals to "Saturday, January 1, 2000 10 a.m."', () => {
        let now = new Date(2000, 0, 1, 10, 0, 0);
        expect(date.format(now, 'dddd, MMMM D, YYYY h A')).to.equal('Saturday, January 1, 2000 10 a.m.');
    });
    it('"[dddd, MMMM D, YYYY h A]" equals to "dddd, MMMM D, YYYY h A"', () => {
        let now = new Date(2000, 0, 1, 10, 0, 0);
        expect(date.format(now, '[dddd, MMMM D, YYYY h A]')).to.equal('dddd, MMMM D, YYYY h A');
    });
    it('"[dddd], MMMM [D], YYYY [h] A" equals to "dddd, January D, 2000 h a.m."', () => {
        let now = new Date(2000, 0, 1, 10, 0, 0);
        expect(date.format(now, '[dddd], MMMM [D], YYYY [h] A')).to.equal('dddd, January D, 2000 h a.m.');
    });
    it('"[[dddd], MMMM [D], YYYY [h] A]" equals to "[dddd], MMMM [D], YYYY [h] A"', () => {
        let now = new Date(2000, 0, 1, 10, 0, 0);
        expect(date.format(now, '[[dddd], MMMM [D], YYYY [h] A]')).to.equal('[dddd], MMMM [D], YYYY [h] A');
    });
    it('"[dddd], MMMM [[D], YYYY] [h] A" equals to "dddd, January [D], YYYY h a.m."', () => {
        let now = new Date(2000, 0, 1, 10, 0, 0);
        expect(date.format(now, '[dddd], MMMM [[D], YYYY] [h] A')).to.equal('dddd, January [D], YYYY h a.m.');
    });
});

describe('parse', () => {
    it('YYYY', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015', 'YYYY')).to.eql(now);
    });
    it('YYYY', () => {
        let now = new Date(100, 0, 1);
        expect(date.parse('100', 'YYYY')).to.eql(now);
    });
    it('YYYY', () => {
        let now = new Date(9999, 0, 1);
        expect(date.parse('9999', 'YYYY')).to.eql(now);
    });
    it('YYYY', () => {
        let now = new Date(99, 0, 1);
        expect(date.parse('99', 'YYYY')).to.eql(now);
    });
    it('YYYY', () => {
        let now = new Date(2009, 0, 1);
        expect(date.parse('9', 'YYYY')).to.eql(now);
    });
    it('YYYY', () => {
        let now = new Date(2000, 0, 1);
        expect(date.parse('0', 'YYYY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('15', 'YY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(2000, 0, 1);
        expect(date.parse('0', 'YY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(2010, 0, 1);
        expect(date.parse('10', 'YY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(2069, 0, 1);
        expect(date.parse('69', 'YY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(1970, 0, 1);
        expect(date.parse('70', 'YY')).to.eql(now);
    });
    it('YY', () => {
        let now = new Date(1999, 0, 1);
        expect(date.parse('99', 'YY')).to.eql(now);
    });
    it('YYYY MMMM', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015 January', 'YYYY MMMM')).to.eql(now);
    });
    it('YYYY MMMM', () => {
        let now = new Date(2015, 11, 1);
        expect(date.parse('2015 December', 'YYYY MMMM')).to.eql(now);
    });
    it('YYYY MMMM', () => {
        expect(isNaN(date.parse('2015 Zero', 'YYYY MMMM'))).to.be(true);
    });
    it('YYYY MMM', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015 Jan', 'YYYY MMM')).to.eql(now);
    });
    it('YYYY MMM', () => {
        let now = new Date(2015, 11, 1);
        expect(date.parse('2015 Dec', 'YYYY MMM')).to.eql(now);
    });
    it('YYYY MMM', () => {
        expect(isNaN(date.parse('2015 Zero', 'YYYY MMM'))).to.be(true);
    });
    it('YYYY-MM', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015-01', 'YYYY-MM')).to.eql(now);
    });
    it('YYYY-MM', () => {
        let now = new Date(2015, 11, 1);
        expect(date.parse('2015-12', 'YYYY-MM')).to.eql(now);
    });
    it('YYYY-MM', () => {
        expect(isNaN(date.parse('2015-00', 'YYYY-MM'))).to.be(true);
    });
    it('YYYY-M', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015-1', 'YYYY-M')).to.eql(now);
    });
    it('YYYY-M', () => {
        let now = new Date(2015, 11, 1);
        expect(date.parse('2015-12', 'YYYY-M')).to.eql(now);
    });
    it('YYYY-M', () => {
        expect(isNaN(date.parse('2015-0', 'YYYY-M'))).to.be(true);
    });
    it('YYYY-MM-DD', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015-01-01', 'YYYY-MM-DD')).to.eql(now);
    });
    it('YYYY-MM-DD', () => {
        let now = new Date(2015, 11, 31);
        expect(date.parse('2015-12-31', 'YYYY-MM-DD')).to.eql(now);
    });
    it('YYYY-MM-DD', () => {
        expect(isNaN(date.parse('2015-00-00', 'YYYY-MM-DD'))).to.be(true);
    });
    it('YYYY-M-D', () => {
        let now = new Date(2015, 0, 1);
        expect(date.parse('2015-1-1', 'YYYY-M-D')).to.eql(now);
    });
    it('YYYY-M-D', () => {
        let now = new Date(2015, 11, 31);
        expect(date.parse('2015-12-31', 'YYYY-M-D')).to.eql(now);
    });
    it('YYYY-M-D', () => {
        expect(isNaN(date.parse('2015-0-0', 'YYYY-M-D'))).to.be(true);
    });
    it('YYYY-MM-DD HH', () => {
        let now = new Date(2015, 0, 1, 0);
        expect(date.parse('2015-01-01 00', 'YYYY-MM-DD HH')).to.eql(now);
    });
    it('YYYY-MM-DD HH', () => {
        let now = new Date(2015, 11, 31, 23);
        expect(date.parse('2015-12-31 23', 'YYYY-MM-DD HH')).to.eql(now);
    });
    it('YYYY-MM-DD HH', () => {
        expect(isNaN(date.parse('2015-00-00 24', 'YYYY-MM-DD HH'))).to.be(true);
    });
    it('YYYY-M-D H', () => {
        let now = new Date(2015, 0, 1, 0);
        expect(date.parse('2015-1-1 0', 'YYYY-M-D H')).to.eql(now);
    });
    it('YYYY-M-D H', () => {
        let now = new Date(2015, 11, 31, 23);
        expect(date.parse('2015-12-31 23', 'YYYY-M-D H')).to.eql(now);
    });
    it('YYYY-M-D H', () => {
        expect(isNaN(date.parse('2015-0-0 24', 'YYYY-M-D H'))).to.be(true);
    });
    it('YYYY-M-D hh A', () => {
        let now = new Date(2015, 0, 1, 0);
        expect(date.parse('2015-1-1 12 a.m.', 'YYYY-M-D hh A')).to.eql(now);
    });
    it('YYYY-M-D hh A', () => {
        let now = new Date(2015, 11, 31, 23);
        expect(date.parse('2015-12-31 11 p.m.', 'YYYY-M-D hh A')).to.eql(now);
    });
    it('YYYY-M-D hh A', () => {
        expect(isNaN(date.parse('2015-0-0 12 a.m.', 'YYYY-M-D hh A'))).to.be(true);
    });
    it('YYYY-M-D h A', () => {
        let now = new Date(2015, 0, 1, 0);
        expect(date.parse('2015-1-1 12 a.m.', 'YYYY-M-D h A')).to.eql(now);
    });
    it('YYYY-M-D h A', () => {
        let now = new Date(2015, 11, 31, 23);
        expect(date.parse('2015-12-31 11 p.m.', 'YYYY-M-D h A')).to.eql(now);
    });
    it('YYYY-M-D h A', () => {
        expect(isNaN(date.parse('2015-0-0 12 a.m.', 'YYYY-M-D h A'))).to.be(true);
    });
    it('YYYY-MM-DD HH:mm', () => {
        let now = new Date(2015, 0, 1, 0, 0);
        expect(date.parse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).to.eql(now);
    });
    it('YYYY-MM-DD HH:mm', () => {
        let now = new Date(2015, 11, 31, 23, 59);
        expect(date.parse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).to.eql(now);
    });
    it('YYYY-MM-DD HH:mm', () => {
        expect(isNaN(date.parse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm'))).to.be(true);
    });
    it('YYYY-M-D H:m', () => {
        let now = new Date(2015, 0, 1, 0, 0);
        expect(date.parse('2015-1-1 0:0', 'YYYY-M-D H:m')).to.eql(now);
    });
    it('YYYY-M-D H:m', () => {
        let now = new Date(2015, 11, 31, 23, 59);
        expect(date.parse('2015-12-31 23:59', 'YYYY-M-D H:m')).to.eql(now);
    });
    it('YYYY-M-D H:m', () => {
        expect(isNaN(date.parse('2015-0-0 24:60', 'YYYY-M-D H:m'))).to.be(true);
    });
    it('YYYY-MM-DD HH:mm:ss', () => {
        let now = new Date(2015, 0, 1, 0, 0, 0);
        expect(date.parse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
    });
    it('YYYY-MM-DD HH:mm:ss', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59);
        expect(date.parse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
    });
    it('YYYY-MM-DD HH:mm:ss', () => {
        expect(isNaN(date.parse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss'))).to.be(true);
    });
    it('YYYY-M-D H:m:s', () => {
        let now = new Date(2015, 0, 1, 0, 0);
        expect(date.parse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).to.eql(now);
    });
    it('YYYY-M-D H:m:s', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59);
        expect(date.parse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).to.eql(now);
    });
    it('YYYY-M-D H:m:s', () => {
        expect(isNaN(date.parse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s'))).to.be(true);
    });
    it('YYYY-M-D H:m:s.SSS', () => {
        let now = new Date(2015, 0, 1, 0, 0, 0);
        expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.SSS', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59, 999);
        expect(date.parse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.SSS', () => {
        expect(isNaN(date.parse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS'))).to.be(true);
    });
    it('YYYY-M-D H:m:s.SS', () => {
        let now = new Date(2015, 0, 1, 0, 0, 0);
        expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.SS', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59, 990);
        expect(date.parse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.SS', () => {
        expect(isNaN(date.parse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS'))).to.be(true);
    });
    it('YYYY-M-D H:m:s.S', () => {
        let now = new Date(2015, 0, 1, 0, 0, 0);
        expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.S', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59, 900);
        expect(date.parse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).to.eql(now);
    });
    it('YYYY M D H m s S', () => {
        let now = new Date(2015, 11, 31, 23, 59, 59, 900);
        expect(date.parse('2015-12-31 23:59:59.9', 'YYYY M D H m s S')).to.eql(now);
    });
    it('YYYY-M-D H:m:s.S', () => {
        expect(isNaN(date.parse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S'))).to.be(true);
    });
    it('foo', () => {
        expect(isNaN(date.parse('20150101235959', 'foo'))).to.be(true);
    });
    it('bar', () => {
        expect(isNaN(date.parse('20150101235959', 'bar'))).to.be(true);
    });
    it('YYYYMMDD', () => {
        expect(isNaN(date.parse('20150101235959', 'YYYYMMDD'))).to.be(true);
    });
    it('20150101235959', () => {
        expect(isNaN(date.parse('20150101235959', '20150101235959'))).to.be(true);
    });
    it('YYYY?M?D H?m?s?S', () => {
        expect(isNaN(date.parse('2015-12-31 23:59:59.9', 'YYYY?M?D H?m?s?S'))).to.be(true);
    });
});

describe('addition', () => {
    it('add a year', () => {
        let date1 = new Date(1969, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(1970, 11, 31, 23, 59, 59, 999);
        expect(date.addYears(date1, 1)).to.eql(date2);
    });
    it('subtract a year', () => {
        let date1 = new Date(1970, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(1969, 11, 31, 23, 59, 59, 999);
        expect(date.addYears(date1, -1)).to.eql(date2);
    });
    it('add a month', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 12, 31, 23, 59, 59, 999);
        expect(date.addMonths(date1, 1)).to.eql(date2);
    });
    it('subtract a month', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 10, 31, 23, 59, 59, 999);
        expect(date.addMonths(date1, -1)).to.eql(date2);
    });
    it('add a day', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 32, 23, 59, 59, 999);
        expect(date.addDays(date1, 1)).to.eql(date2);
    });
    it('subtract a day', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 30, 23, 59, 59, 999);
        expect(date.addDays(date1, -1)).to.eql(date2);
    });
    it('add an hour', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 24, 59, 59, 999);
        expect(date.addHours(date1, 1)).to.eql(date2);
    });
    it('subtract an hour', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 22, 59, 59, 999);
        expect(date.addHours(date1, -1)).to.eql(date2);
    });
    it('add a minute', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 60, 59, 999);
        expect(date.addMinutes(date1, 1)).to.eql(date2);
    });
    it('subtract a minute', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 58, 59, 999);
        expect(date.addMinutes(date1, -1)).to.eql(date2);
    });
    it('add a second', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 60, 999);
        expect(date.addSeconds(date1, 1)).to.eql(date2);
    });
    it('subtract a second', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 58, 999);
        expect(date.addSeconds(date1, -1)).to.eql(date2);
    });
    it('add a millisecond', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 1000);
        expect(date.addMilliseconds(date1, 1)).to.eql(date2);
    });
    it('subtract a millisecond', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
        expect(date.addMilliseconds(date1, -1)).to.eql(date2);
    });
});

describe('subtraction', () => {
    it('A year is 365 days', () => {
        let date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(365);
        expect(date.subtract(date1, date2).toHours()).to.equal(365 * 24);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(365 * 24 * 60);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(365 * 24 * 60 * 60);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(365 * 24 * 60 * 60 * 1000);
    });
    it('A year is 365 days (reverse)', () => {
        let date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(-365);
        expect(date.subtract(date2, date1).toHours()).to.equal(-365 * 24);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(-365 * 24 * 60);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-365 * 24 * 60 * 60);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-365 * 24 * 60 * 60 * 1000);
    });
    it('A month is 31 days', () => {
        let date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(31);
        expect(date.subtract(date1, date2).toHours()).to.equal(31 * 24);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(31 * 24 * 60);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(31 * 24 * 60 * 60);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(31 * 24 * 60 * 60 * 1000);
    });
    it('A month is 31 days (reverse)', () => {
        let date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(-31);
        expect(date.subtract(date2, date1).toHours()).to.equal(-31 * 24);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(-31 * 24 * 60);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-31 * 24 * 60 * 60);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-31 * 24 * 60 * 60 * 1000);
    });
    it('A day', () => {
        let date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(1);
        expect(date.subtract(date1, date2).toHours()).to.equal(24);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(24 * 60);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(24 * 60 * 60);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(24 * 60 * 60 * 1000);
    });
    it('A day (reverse)', () => {
        let date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(-1);
        expect(date.subtract(date2, date1).toHours()).to.equal(-1 * 24);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 * 24 * 60);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 24 * 60 * 60);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 24 * 60 * 60 * 1000);
    });
    it('An hour', () => {
        let date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(0);
        expect(date.subtract(date1, date2).toHours()).to.equal(1);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(60);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(60 * 60);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(60 * 60 * 1000);
    });
    it('An hour (reverse)', () => {
        let date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(0);
        expect(date.subtract(date2, date1).toHours()).to.equal(-1);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 * 60);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 60 * 60);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 60 * 60 * 1000);
    });
    it('A minute', () => {
        let date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(0);
        expect(date.subtract(date1, date2).toHours()).to.equal(0);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(1);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(60);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(60 * 1000);
    });
    it('A minute (reverse)', () => {
        let date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(0);
        expect(date.subtract(date2, date1).toHours()).to.equal(0);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(-1);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 60);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 60 * 1000);
    });
    it('A second', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date1, date2).toDays()).to.equal(0);
        expect(date.subtract(date1, date2).toHours()).to.equal(0);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(0);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(1);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(1000);
    });
    it('A second (reverse)', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
        expect(date.subtract(date2, date1).toDays()).to.equal(0);
        expect(date.subtract(date2, date1).toHours()).to.equal(0);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(0);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(-1);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 1000);
    });
    it('A millisecond', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
        expect(date.subtract(date1, date2).toDays()).to.equal(0);
        expect(date.subtract(date1, date2).toHours()).to.equal(0);
        expect(date.subtract(date1, date2).toMinutes()).to.equal(0);
        expect(date.subtract(date1, date2).toSeconds()).to.equal(0);
        expect(date.subtract(date1, date2).toMilliseconds()).to.equal(1);
    });
    it('A millisecond (reverse)', () => {
        let date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
        let date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
        expect(date.subtract(date2, date1).toDays()).to.equal(0);
        expect(date.subtract(date2, date1).toHours()).to.equal(0);
        expect(date.subtract(date2, date1).toMinutes()).to.equal(0);
        expect(date.subtract(date2, date1).toSeconds()).to.equal(0);
        expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1);
    });
});

describe('validation', () => {
    it('2014-12-31 12:34:56.789 is valid', () => {
        expect(date.isValid('20141231123456789', 'YYYYMMDDHHmmssSSS')).to.be(true);
    });
    it('2012-2-29 is valid', () => {
        expect(date.isValid('2012-2-29', 'YYYY-M-D')).to.be(true);
    });
    it('2100-2-29 is invalid', () => {
        expect(date.isValid('2100-2-29', 'YYYY-M-D')).to.be(false);
    });
    it('2000-2-29 is valid', () => {
        expect(date.isValid('2000-2-29', 'YYYY-M-D')).to.be(true);
    });
    it('2014-2-29 is invalid', () => {
        expect(date.isValid('2014-2-29', 'YYYY-M-D')).to.be(false);
    });
    it('2014-2-28 is valid', () => {
        expect(date.isValid('2014-2-28', 'YYYY-M-D')).to.be(true);
    });
    it('2014-4-31 is invalid', () => {
        expect(date.isValid('2014-4-31', 'YYYY-M-D')).to.be(false);
    });
    it('24:00 is invalid', () => {
        expect(date.isValid('2014-4-30 24:00', 'YYYY-M-D H:m')).to.be(false);
    });
    it('13:00 p.m. is invalid', () => {
        expect(date.isValid('2014-4-30 13:00 p.m.', 'YYYY-M-D h:m A')).to.be(false);
    });
    it('23:60 is invalid', () => {
        expect(date.isValid('2014-4-30 23:60', 'YYYY-M-D H:m')).to.be(false);
    });
    it('23:59:60 is invalid', () => {
        expect(date.isValid('2014-4-30 23:59:60', 'YYYY-M-D H:m:s')).to.be(false);
    });
    it('All zero is invalid', () => {
        expect(date.isValid('00000000000000000', 'YYYYMMDDHHmmssSSS')).to.be(false);
    });
    it('All nine is invalid', () => {
        expect(date.isValid('99999999999999999', 'YYYYMMDDHHmmssSSS')).to.be(false);
    });
    it('foo is invalid', () => {
        expect(date.isValid('20150101235959', 'foo')).to.be(false);
    });
    it('bar is invalid', () => {
        expect(date.isValid('20150101235959', 'bar')).to.be(false);
    });
    it('YYYYMMDD is invalid', () => {
        expect(date.isValid('20150101235959', 'YYYYMMDD')).to.be(false);
    });
    it('20150101235959 is invalid', () => {
        expect(date.isValid('20150101235959', '20150101235959')).to.be(false);
    });
});

describe('leap year', () => {
    it('2012-2-29 It is valid.', () => {
        expect(date.isLeapYear(new Date(2012, 0, 1))).to.be(true);
    });
    it('2100-2-29 It is invalid.', () => {
        expect(date.isLeapYear(new Date(2100, 0, 1))).to.be(false);
    });
    it('2000-2-29 It is valid.', () => {
        expect(date.isLeapYear(new Date(2000, 0, 1))).to.be(true);
    });
    it('2014-2-29 It is invalid.', () => {
        expect(date.isLeapYear(new Date(2014, 0, 1))).to.be(false);
    });
});

describe('the same day', () => {
    it('the same', () => {
        let date1 = new Date(2016, 0, 1, 2, 34, 56, 789);
        let date2 = new Date(2016, 0, 1, 23, 4, 56, 789);
        expect(date.isSameDay(date1, date2)).to.be(true);
    });
    it('the same', () => {
        let date1 = new Date(1916, 0, 1, 2, 34, 56, 789);
        let date2 = new Date(1916, 0, 1, 23, 4, 56, 789);
        expect(date.isSameDay(date1, date2)).to.be(true);
    });
    it('not the same', () => {
        let date1 = new Date(2016, 0, 1, 23, 59, 59, 999);
        let date2 = new Date(2016, 0, 2, 0, 0, 0, 0);
        expect(date.isSameDay(date1, date2)).to.be(false);
    });
    it('not the same', () => {
        let date1 = new Date(1916, 0, 1, 23, 59, 59, 999);
        let date2 = new Date(1916, 0, 2, 0, 0, 0, 0);
        expect(date.isSameDay(date1, date2)).to.be(false);
    });
});

describe('customize', () => {
    it('getting default meridiem', () => {
        let locale = date.getLocales('en');
        expect(locale.A[0]).to.equal('a.m.');
        expect(locale.A[1]).to.equal('p.m.');
    });
    it('changing default meridiem', () => {
        date.setLocales('en', {
            A: ['AM', 'PM']
        });
        expect(date.format(new Date(2012, 0, 1, 12), 'h A')).to.equal('12 PM');
    });
});
