(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{227:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"installing-vue-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-vue-cli"}},[t._v("#")]),t._v(" Installing vue-cli")]),t._v(" "),s("p",[s("code",[t._v("vue-test-utils")]),t._v(" is the official testing library for Vue, and will be used throughout the guide. It runs in both a browser and Node.js environment, and works with any test runner. We will be running our tests in a Node.js environment throughout this guide.")]),t._v(" "),s("p",[s("code",[t._v("vue-cli")]),t._v(" is the easiest way to get started. It will set up a project, as well as configure Jest, a popular testing framework. Install it by running:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @vue/cli\n")])])]),s("p",[t._v("or with npm:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @vue/cli\n")])])]),s("p",[t._v("Create a new project by running "),s("code",[t._v("vue create [project-name]")]),t._v('. Choose "Manually select features" and "Unit Testing", and "Jest" for the test runner.')]),t._v(" "),s("p",[t._v("Once the installation finishes, "),s("code",[t._v("cd")]),t._v(" into the project and run "),s("code",[t._v("yarn test:unit")]),t._v(". If everything went well, you should see:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" PASS  tests/unit/HelloWorld.spec.js\n  HelloWorld.vue\n    ✓ renders props.msg when passed (26ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        2.074s\n")])])]),s("p",[t._v("Congratulations, you just ran your first passing test!")]),t._v(" "),s("h2",{attrs:{id:"writing-your-first-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-your-first-test"}},[t._v("#")]),t._v(" Writing your first test")]),t._v(" "),s("p",[t._v("We ran an existing test that came with the project. Let's get our hands dirty, writing our own component, and a test. Traditionally when doing TDD, you write the failing test first, then implement the code which allows the test to pass. For now, we will write the component first.")]),t._v(" "),s("p",[t._v("We don't need "),s("code",[t._v("src/components/HelloWorld.vue")]),t._v(" or "),s("code",[t._v("tests/unit/HelloWorld.spec.js")]),t._v(" anymore, so you can delete those.")]),t._v(" "),s("h2",{attrs:{id:"creating-the-greeting-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-greeting-component"}},[t._v("#")]),t._v(" Creating the "),s("code",[t._v("Greeting")]),t._v(" component")]),t._v(" "),s("p",[t._v("Create a "),s("code",[t._v("Greeting.vue")]),t._v(" file in "),s("code",[t._v("src/components")]),t._v(". Inside "),s("code",[t._v("Greeting.vue")]),t._v(", add the following:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"writing-the-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-the-test"}},[t._v("#")]),t._v(" Writing the test")]),t._v(" "),s("p",[s("code",[t._v("Greeting")]),t._v(" has only one responsibility - to render the "),s("code",[t._v("greeting")]),t._v(" value. The strategy will be:")]),t._v(" "),s("ol",[s("li",[t._v("render the component with "),s("code",[t._v("mount")])]),t._v(" "),s("li",[t._v('assert that the component\'s text contains "Vue and TDD"')])]),t._v(" "),s("p",[t._v("Create a "),s("code",[t._v("Greeting.spec.js")]),t._v(" inside "),s("code",[t._v("tests/unit")]),t._v(". Inside, import "),s("code",[t._v("Greeting.vue")]),t._v(", as well as "),s("code",[t._v("mount")]),t._v(", and add the outline of the test:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { mount } from '@vue/test-utils'\nimport Greeting from '@/components/Greeting.vue'\n\ndescribe('Greeting.vue', () => {\n  it('renders a greeting', () => {\n\n  })\n})\n")])])]),s("p",[t._v("There are different syntaxes used for TDD, we will use the commonly seen "),s("code",[t._v("describe")]),t._v(" and "),s("code",[t._v("it")]),t._v(" syntax that comes with Jest. "),s("code",[t._v("describe")]),t._v(" generally outlines what the test is about, in this case "),s("code",[t._v("Greeting.vue")]),t._v(". "),s("code",[t._v("it")]),t._v(" represents a single piece of responsibility that the subject of the test should fulfill. As we add more features to the component, we add more "),s("code",[t._v("it")]),t._v(" blocks.")]),t._v(" "),s("p",[t._v("Now we should render the component with "),s("code",[t._v("mount")]),t._v(". The standard practice is to assign the component to a variable called "),s("code",[t._v("wrapper")]),t._v(". We will also print the output, to make sure everything is running correctly:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"running-the-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-test"}},[t._v("#")]),t._v(" Running the test")]),t._v(" "),s("p",[t._v("Run the test by typing "),s("code",[t._v("yarn test:unit")]),t._v(" into your terminal. Any file in the "),s("code",[t._v("tests")]),t._v(" directory ending with "),s("code",[t._v(".spec.js")]),t._v(" is automatically executed. If everything went well, you should see:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (27ms)\n\nconsole.log tests/unit/Greeting.spec.js:7\n  <div>\n    Vue and TDD\n  </div>\n")])])]),s("p",[t._v("We can see the markup is correct, and the test passes. The test is passing because there was no failure - this test can never fail, so it is not very useful yet. Even if we change "),s("code",[t._v("Greeting.vue")]),t._v(" and delete the "),s("code",[t._v("greeting")]),t._v(" from the template, it will still pass. Let's change that.")]),t._v(" "),s("h2",{attrs:{id:"making-assertions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-assertions"}},[t._v("#")]),t._v(" Making assertions")]),t._v(" "),s("p",[t._v("We need to make an assertion to ensure the component is behaving correctly. We can do that using Jest's "),s("code",[t._v("expect")]),t._v(" API. It looks like this: "),s("code",[t._v("expect(result).to [matcher] (actual)")]),t._v(".")]),t._v(" "),s("p",[s("em",[t._v("Matchers")]),t._v(" are methods to compare values and objects. For example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("A full list of matchers is available in the "),s("a",{attrs:{href:"http://jestjs.io/docs/en/expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest documentation"),s("OutboundLink")],1),t._v(". "),s("code",[t._v("vue-test-utils")]),t._v(" doesn't include any matchers - the ones Jest provides are more than enough. We want to compare the text from "),s("code",[t._v("Greeting")]),t._v(". We could write:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("but "),s("code",[t._v("vue-test-utils")]),t._v(" has an even better way to get the markup - "),s("code",[t._v("wrapper.text")]),t._v(". Let's finish the test off:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mount "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/test-utils'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Greeting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Greeting.vue'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greeting.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'renders a greeting'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toMatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue and TDD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("We don't need the "),s("code",[t._v("console.log")]),t._v(" anymore, so you can delete that. Run the tests with "),s("code",[t._v("yarn unit:test")]),t._v(", and if everything went well you should get:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PASS  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✓ renders a greeting (15ms)\n\nTest Suites: 1 passed, 1 total\nTests:       1 passed, 1 total\nSnapshots:   0 total\nTime:        1.477s, estimated 2s\n")])])]),s("p",[t._v("Looking good. But you should always see a test fail, then pass, to make sure it's really working. In traditional TDD, you would write the test before the actual implementation, see it fail, then use the failing errors to guide your code. Let's make sure this test is really working. Update "),s("code",[t._v("Greeting.vue")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ greeting }}\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Greeting"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue without TDD"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("And now run the test with "),s("code",[t._v("yarn test:unit")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('FAIL  tests/unit/Greeting.spec.js\nGreeting.vue\n  ✕ renders a greeting (24ms)\n\n● Greeting.vue › renders a greeting\n\n  expect(received).toMatch(expected)\n\n  Expected value to match:\n    "Vue and TDD"\n  Received:\n    "Vue without TDD"\n\n     6 |     const wrapper = mount(Greeting)\n     7 |\n  >  8 |     expect(wrapper.text()).toMatch("Vue and TDD")\n       |                            ^\n     9 |   })\n    10 | })\n    11 |\n\n    at Object.<anonymous> (tests/unit/Greeting.spec.js:8:28)\n')])])]),s("p",[t._v("Jest gives us good feedback. We can see the expected and actual result, as well as on which line the expectation failed. The test did fail, as expected. Revert "),s("code",[t._v("Greeting.vue")]),t._v(" and make sure the test is passing again.")]),t._v(" "),s("p",[t._v("Next we will look at the two methods "),s("code",[t._v("vue-test-utils")]),t._v(" provides to render components: "),s("code",[t._v("mount")]),t._v(" and "),s("code",[t._v("shallowMount")]),t._v(".")])])}),[],!1,null,null,null);e.default=a.exports}}]);