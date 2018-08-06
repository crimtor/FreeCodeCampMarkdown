class MarkdownPreview extends React.Component {
  render() {
    return (
      <div id='markdown-preview'>
        <h4>Markdown previewer</h4>
        <div  id='preview' dangerouslySetInnerHTML={this.props.markup}></div>
      </div>
    );
  }
}

class MarkdownEditor extends React.Component {
  render() {
    return (
      <div id='markdown-editor'>
        <h4>Markdown editor</h4>
        <textarea rows="15" id='editor' onChange={this.props.onChange} value={this.props.value}></textarea>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`};


this.handleChange = this.handleChange.bind(this);
  }
 convertMarkup() {
    return {__html: marked(this.state.text, {sanitize: true})};
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <MarkdownEditor onChange={this.handleChange} value={this.state.text}/>
        <MarkdownPreview markup={this.convertMarkup()} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
