import test from 'ava';
import phtml from 'phtml';
import phtmlDoctype from '@phtml/doctype';

test('phtml without plugins', async t => {
	t.is(await phtml.process('<!doctype html>').then(result => result.html), '<!doctype html>');
	t.is(await phtml.process('<body>hello world</body>').then(result => result.html), '<body>hello world</body>');
	t.is(await phtml.process('goodbye mars').then(result => result.html), 'goodbye mars');
});

test('phtml with plugins', async t => {
	t.is(await phtml.use(phtmlDoctype).process('<!doctype html>').then(result => result.html), '<!doctype html>');
	t.is(await phtml.use(phtmlDoctype).process('<body>hello world</body>').then(result => result.html), '<!doctype html><body>hello world</body>');
	t.is(await phtml.use(phtmlDoctype).process('goodbye mars').then(result => result.html), '<!doctype html>goodbye mars');
	t.is(await phtml.use(phtmlDoctype({ safe: true })).process('goodbye mars').then(result => result.html), 'goodbye mars');
});
