import { Selector } from 'testcafe';

fixture`Check if the button text changes`
  .page`https://oye-harry-react-hn.herokuapp.com/`;

test('My test', async (t) => {
  await t.click('.fzvWeC').expect(Selector('.fzvWeC').value).eql('Hello!');
});
