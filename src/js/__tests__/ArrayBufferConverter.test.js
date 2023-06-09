import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('check clase ArrayBufferConverter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const received = converter.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toEqual(expected);
});
