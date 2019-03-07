//'usc strict';
//var str = `is this This?`;
//
////var regex = new RegExp("is", "g");
//var regex = /is/gi;
//console.log(regex.exec(str));
//console.log(regex.exec(str));
//console.log(regex.exec(str));
//console.log(regex.exec(str));

//console.log(str.match(regex));

//console.log(str.replace(regex, str => "XX"));

//console.log(str.search(regex));

//ex1
//var str = "Завтрак в 09:00";
//var pattern = /^(([01][0-9])|(2[0-3])):[0-5][0-9]$/;
//var regex = /^(([01][0-9])|(2[0-3])):[0-5][0-9]$/gi;
//console.log(str.search(regex));


////ex2
//var str = `Завтрак в 09:00`;
//var regex = /\-?\s?\d+\.?\d?\s?[\+\-*\\?]\s?\-?\s?\d+\.?\d?/gi;
//console.log(str.match(regex));

//ex3
import {PRIMARY_OUTLET, ParamMap, Params, convertToParamMap} from './shared';
import {forEach, shallowEqual} from './utils/collection';

export function createEmptyUrlTree() {
  return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}

export function containsTree(container: UrlTree, containee: UrlTree, exact: boolean): boolean {
  if (exact) {
    return equalQueryParams(container.queryParams, containee.queryParams) &&
        equalSegmentGroups(container.root, containee.root);
  }

  return containsQueryParams(container.queryParams, containee.queryParams) &&
      containsSegmentGroup(container.root, containee.root);
}

function equalQueryParams(container: Params, containee: Params): boolean {
  // TODO: This does not handle array params correctly.
  return shallowEqual(container, containee);
}

function equalSegmentGroups(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c])) return false;
  }
  return true;
}

function containsQueryParams(container: Params, containee: Params): boolean {
  // TODO: This does not handle array params correctly.
  return Object.keys(containee).length <= Object.keys(container).length &&
      Object.keys(containee).every(key => containee[key] === container[key]);
}

function containsSegmentGroup(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean {
  return containsSegmentGroupHelper(container, containee, containee.segments);
}

function containsSegmentGroupHelper(
    container: UrlSegmentGroup, containee: UrlSegmentGroup, containeePaths: UrlSegment[]): boolean {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    return true;

  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c])) return false;
    }
    return true;

  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
  }
}

//interface UrlTree {
//  root: UrlSegmentGroup
//  queryParams: Params
//  fragment: string | null
//  queryParamMap: ParamMap
//  toString(): string
//}