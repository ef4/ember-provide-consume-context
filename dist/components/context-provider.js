import Component from '@glimmer/component';
import { t as trackProviderInstanceContexts } from '../provide-consume-context-container-cb8f1dd9.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{yield}}");

class ContextProvider extends Component {
  constructor(owner, args) {
    super(owner, args);
    trackProviderInstanceContexts(this, [[args.key, 'value']]);
  }
  get value() {
    return this.args.value;
  }
}
setComponentTemplate(TEMPLATE, ContextProvider);

export { ContextProvider as default };
//# sourceMappingURL=context-provider.js.map
