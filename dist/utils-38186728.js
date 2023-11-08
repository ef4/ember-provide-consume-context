import { getOwner } from '@ember/owner';

// TODO: See if we can type the owner
function getProvider(owner, contextKey) {
  const renderer = getOwner(owner)?.lookup('renderer:-dom');
  if (renderer == null) {
    return null;
  }
  const provideConsumeContextContainer = renderer._runtime?.env?.provideConsumeContextContainer;
  if (provideConsumeContextContainer == null) {
    return null;
  }
  const contextsObject = provideConsumeContextContainer.contexts.get(owner);
  return contextsObject?.[contextKey];
}
function hasContext(owner, contextKey) {
  const provider = getProvider(owner, contextKey);
  return provider != null;
}
function getContextValue(owner, contextKey) {
  if (!hasContext(owner, contextKey)) {
    return undefined;
  }
  const providerObj = getProvider(owner, contextKey);
  return providerObj.instance[providerObj.key];
}

export { getContextValue as g, hasContext as h };
//# sourceMappingURL=utils-38186728.js.map
