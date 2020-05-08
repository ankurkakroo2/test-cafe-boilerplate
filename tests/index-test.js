import { Selector } from 'testcafe';
console.log('Process env', process.env);

fixture`Check if the button text changes`
  .page`https://oye-harry-react-hn.herokuapp.com/`;

test('My test', async (t) => {
  await t.click('.fzvWeC').expect(Selector('.fzvWeC').value).eql('Hello!');
});
