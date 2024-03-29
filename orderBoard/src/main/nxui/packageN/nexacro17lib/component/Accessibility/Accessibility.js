//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html
//
//==============================================================================

if (!nexacro._isDesktop()) {
	if (nexacro._OS == "Android") {
		nexacro._accessibilitytype = 5;
	}
	else if (nexacro._OS == "iOS") {
		nexacro._accessibilitytype = 4;
	}
	else {
		nexacro._accessibilitytype = 1;
	}
}
else {
	nexacro._accessibilitytype = 1;
}

nexacro._setEnableAccessibility = function (v) {
	v = nexacro._toBoolean(v);

	nexacro._enableaccessibility = v;
	if (nexacro._enableaccessibility && (!nexacro._isDesktop() && nexacro._Browser != "Runtime")) {
		nexacro._use_translate_scroll = 0;
	}

	nexacro.__setEnableAccessibility(v);
};

nexacro._setAccessibilityType = function (accessibilitytype) {
	var v = nexacro._toString(accessibilitytype).toLowerCase();

	switch (v) {
		case "sensereader":
			nexacro._accessibilitytype = 2;
			break;
		case "jaws":
			nexacro._accessibilitytype = 3;
			break;
		default:
			nexacro._accessibilitytype = 1;
			break;
	}

	if (!nexacro._isDesktop()) {
		if (nexacro._OS == "Android") {
			nexacro._accessibilitytype = 5;
		}
		else if (nexacro._OS == "iOS") {
			nexacro._accessibilitytype = 4;
		}
	}

	nexacro.__setAccessibilityType(accessibilitytype);
};

nexacro._setAccessibilityDescReadType = function (v) {
	nexacro._accessibilitydescreadtype = 0;
	if (v.match("label")) {
		nexacro._accessibilitydescreadtype |= 0x01;
	}
	if (v.match("action")) {
		nexacro._accessibilitydescreadtype |= 0x02;
	}
	if (v.match("description")) {
		nexacro._accessibilitydescreadtype |= 0x04;
	}
};
nexacro._setAccessibilityWholeReadType = function (v) {
	if (v == "load") {
		nexacro._accessibilitywholereadtype = 1;
	}
	else if (v == "change") {
		nexacro._accessibilitywholereadtype = 2;
	}
	else if (v == "load,change") {
		nexacro._accessibilitywholereadtype = 3;
	}
	else {
		nexacro._accessibilitywholereadtype = 0;
	}
};

nexacro._AccessibilityUtil.getAccessibilityLabel = function (elem) {
	var strLabel = "";
	if (elem) {
		strLabel = elem.accessibilitylabel;
	}
	return strLabel;
};

nexacro._AccessibilityUtil.getAccessibilityAction = function (elem) {
	var strAction = "";
	if (elem) {
		strAction = elem.accessibilityaction;
	}
	return strAction;
};

nexacro._AccessibilityUtil.getAccessibilityDescription = function (elem) {
	var strDescription = "";
	if (elem) {
		strDescription = elem.accessibilitydescription;
	}
	return strDescription;
};

nexacro._AccessibilityUtil.setDOMNodeLabel = function (node, label) {
	if (!node) {
		return;
	}

	if (nexacro._accessibilitytype == 2) {
		node.innerText = label;
	}
	else {
		node.setAttribute("aria-live", "assertive");
		node.innerHTML = label;
	}
};

nexacro._AccessibilityUtil.checkComponentHotkey = function (obj, keyCode, altKey, ctrlKey, shiftKey) {
	var strHotkey = "";
	var hotkeyList = null;

	if (obj instanceof nexacro.Grid) {
		hotkeyList = {
		};
		if (nexacro._accessibilitytype == 2) {
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINROW;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINROW;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_UP] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_DOWN] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
		}
		else {
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELL;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro._AccessibilityUtil.Hotkey.LASTCELL;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_UP] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_DOWN] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_LEFT] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINROW;
			hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_RIGHT] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINROW;
		}
	}

	if (ctrlKey) {
		strHotkey = strHotkey + nexacro.Event.KEY_CTRL + " ";
	}
	if (altKey) {
		strHotkey = strHotkey + nexacro.Event.KEY_ALT + " ";
	}
	if (shiftKey) {
		strHotkey = strHotkey + nexacro.Event.KEY_SHIFT + " ";
	}

	strHotkey = strHotkey + keyCode;

	if (hotkeyList) {
		return hotkeyList[strHotkey];
	}

	return nexacro._AccessibilityUtil.Hotkey.NONE;
};

nexacro._AccessibilityUtil.isUseTooltipText = function () {
	var usetooltip = true;
	if (nexacro._accessibilitytype == 1) {
		usetooltip = false;
	}

	if (nexacro._enableaccessibility && usetooltip) {
		return false;
	}
	return true;
};

nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel = function (elem) {
	var strAdditionalLabel = "";
	if (!elem) {
		return strAdditionalLabel;
	}

	var comp = elem.linkedcontrol;
	if (nexacro._accessibilitytype == 2) {
		strAdditionalLabel = comp._on_getAccessibilityAdditionalLabel() + comp._on_getAccessibilityAdditionalRole();
	}
	else if (nexacro._accessibilitytype == 4) {
		if (comp && (comp._has_inputElement || comp._input_element)) {
			if (!comp.password) {
				if (comp._is_compound) {
					strAdditionalLabel = (comp.text) ? comp.text : "";
				}
				else {
					strAdditionalLabel = (comp._primitivevalue) ? comp._makeCalendarText(comp._primitivevalue) : "";
				}
			}
		}
		strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel();
	}
	else if (nexacro._accessibilitytype == 5) {
		if (comp) {
			if (comp._has_inputElement || comp._input_element) {
				if (!comp.password) {
					if (comp._is_created) {
						if (comp.usedecorate) {
							strAdditionalLabel = comp.displaytext;
						}
						else {
							if (nexacro._Browser == "Runtime") {
								strAdditionalLabel = (comp.value) ? comp.text : comp.displaynulltext ? comp.displaynulltext : "";
							}
							else {
								if (comp._is_compound) {
									strAdditionalLabel = comp._on_getAccessibilityAdditionalLabel();
								}
							}
						}
					}
					else {
						if (nexacro._Browser == "Runtime") {
							strAdditionalLabel = (comp._primitivevalue) ? comp._makeCalendarText(comp._primitivevalue) : (comp.value) ? comp.text : comp.displaynulltext ? comp.displaynulltext : "";
						}
						else {
							strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel();
						}
					}
				}
			}
			else {
				strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel();
				strAdditionalLabel = strAdditionalLabel.trim();
			}
		}
	}

	return strAdditionalLabel;
};

nexacro._AccessibilityUtil.supportMobileApplicationAccessibility = function (container_handle, bForce) {
	if (nexacro._accessibilitytype == 4) {
		var container_element = container_handle._linked_element;

		if (container_element && !bForce) {
			var comp = container_element.parent.linkedcontrol;

			if ((comp && comp._is_component && !comp._hasContainer() && !comp._is_subcontrol && !comp.parent._is_frame && !comp._is_frame)) {
				if (comp.accessibilityrole != "spin" && comp.accessibilityrole != "grid" && comp.accessibilityrole != "treegrid" && comp.accessibilityrole != "radio" && comp.accessibilityrole != "listbox" && comp.accessibilityrole != "textbox" && comp.accessibilityrole != "edit" && comp.accessibilityrole != "webbrowser" && comp.accessibilityrole != "form" && comp.accessibilityrole != "fileupload") {
					nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
				}
			}
			else if (comp && (comp instanceof nexacro.ScrollBarControl)) {
				nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
			}
		}
		else {
			nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
		}
	}
	return;
};

nexacro._AccessibilityUtil.unsupportMobileApplicationAccessibility = function (control_element, bForce) {
	return;
};

nexacro._AccessibilityUtil.cancelTouchEvent = function (elem) {
	if (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) {
		var linkedcontrol = elem ? elem.linkedcontrol : null;
		if (!linkedcontrol && elem.parent) {
			linkedcontrol = elem.parent.linkedcontrol;
			if (linkedcontrol) {
				return elem.parent.accessibilityrole == "link";
			}
		}
	}
	return;
};

nexacro._createFrameNode = nexacro._destroyFrameNode = nexacro._emptyFn;



nexacro._notifyAccessibility = function (node, label, notifyevent, elem, bfocus, benable) {
	var env = nexacro.getEnvironment();
	if (env) {
		var from_refer_comp = elem ? elem.linkedcontrol : env;
		env.on_fire_onaccessibility(label, env, from_refer_comp);
	}

	nexacro.__notifyAccessibility(node, label, notifyevent, elem, bfocus, benable);
};


if (nexacro.Component) {
	var _pComponent = nexacro.Component.prototype;
	_pComponent._block_read_aria_stat = false;
	_pComponent._accessibilitylive = false;

	_pComponent._isAccessibilityRoleHeading = function () {
		return (this._getAccessibilityRole() == "heading");
	};
	_pComponent._getAccessibilityRole = function () {
		return this.accessibilityrole ? this.accessibilityrole : "none";
	};

	_pComponent._getAccessibilityLabel = function () {
		var label = "";
		label = (label = this._getLinkedLabel(this.accessibilitylabel)) ? label : this.on_get_accessibility_label();

		var env = nexacro.getEnvironment();
		var form = this._refform;
		if (form) {
			var comps = form._getComponentsByTaborder(form, 7, true);
			if (comps) {
				var comps_len = comps.length;
				if (comps_len > 0 && this == comps[0]) {
					if (env && env.accessibilityfirstovermessage) {
						label = env.accessibilityfirstovermessage + " " + label;
					}
				}

				if (comps_len > 0 && this == comps[comps_len - 1]) {
					if (env && env.accessibilitylastovermessage) {
						label += " " + env.accessibilitylastovermessage;
					}
				}
			}
		}
		return label ? label : "";
	};

	_pComponent._on_getAccessibilityAdditionalLabel = function () {
		return "";
	};

	_pComponent._on_getAccessibilityAdditionalRole = function () {
		if (this._getAccessibilityRole() == "heading") {
			return " heading";
		}
		if (nexacro._Browser == "Runtime" && this._getAccessibilityRole() == "image") {
			return " graphic";
		}
		if (nexacro._Browser == "Runtime" && this._getAccessibilityRole() == "tabpage") {
			return " frame";
		}
		return "";
	};

	_pComponent._getAccessibilityDescLevel = function () {
		var desclevel = this.accessibilitydesclevel;
		if (desclevel == "none" || desclevel == "child") {
			return desclevel;
		}
		var comp = this.parent;
		if (comp && comp._getDescLevel) {
			return comp._getDescLevel();
		}
		else {
			return desclevel;
		}
	};

	_pComponent._getAccessibilityDescription = function () {
		var description = "";
		return (description = this._getLinkedDescription(this.accessibilitydescription)) ? description : this.on_get_accessibility_description();
	};

	_pComponent._getAccessibilityAction = function () {
		var action = this._getLinkedAction(this.accessibilityaction);
		return action ? action : (action = this.on_get_accessibility_action()) ? action : "";
	};

	_pComponent._getAccessibilityReadLabel = function (b_label) {
		var control = this.getElement();
		if (control) {
			return control._makeAccessibilityLabelbyReadtype(b_label);
		}
		return "";
	};

	_pComponent.on_get_accessibility_label = function () {
		var label = this.text ? this.text : this.value;
		return label ? label : "";
	};

	_pComponent.on_get_accessibility_description = function () {
		return nexacro._isNull(this.tooltiptext) ? "" : this.tooltiptext;
	};

	_pComponent.on_get_accessibility_action = function () {
		return "";
	};
	_pComponent._getLinkedLabel = function (label) {
		var ret = "";
		if (label) {
			var _rs_ = String.fromCharCode(30);
			var arr = label.toString().replace(/\]\[/g, "]" + _rs_ + "[").split(_rs_);
			var len = arr.length;

			for (var i = 0; i < len; i++) {
				var str = arr[i];
				var start = str.search("@");
				var end = str.search("]");
				if (start < 0) {
					start = str.search(/\[/);
				}

				start = (start < 0) ? 0 : start + 1;
				end = (end < 0) ? str.length : end;

				var linkedId = str.substr(start, end - start);
				var linkedComp = this._getFormChildById(linkedId);

				if (linkedComp) {
					ret += linkedComp._getAccessibilityLabel();
				}
				else {
					ret += linkedId;
				}
			}
		}

		return ret;
	};

	_pComponent._getLinkedDescription = function (description) {
		var ret = "";

		if (description) {
			var _rs_ = String.fromCharCode(30);
			var arr = description.replace(/\]\[/g, "]" + _rs_ + "[").split(_rs_);
			var len = arr.length;

			for (var i = 0; i < len; i++) {
				var str = arr[i];
				var linkedId = str.substr(str.search("@") + 1, str.length);
				var linkedComp = this._getFormChildById(linkedId);

				if (linkedComp) {
					ret += linkedComp._getAccessibilityDescription();
				}
				else {
					ret += str;
				}
			}
		}

		return ret;
	};

	_pComponent._getDescLevel = function () {
		if (!this._is_application) {
			var desclevel = this.accessibilitydesclevel;
			var comp = this.parent;
			if (desclevel == "none" || desclevel == "self") {
				return "none";
			}
			else if (comp && comp._getDescLevel) {
				return comp._getDescLevel();
			}
		}
		return "all";
	};

	_pComponent._getLinkedAction = function (action) {
		var ret = "";

		if (action) {
			var _rs_ = String.fromCharCode(30);
			var arr = action.replace(/\]\[/g, "]" + _rs_ + "[").split(_rs_);
			var len = arr.length;

			for (var i = 0; i < len; i++) {
				var str = arr[i];
				var linkedId = str.substr(str.search("@") + 1, str.length);
				var linkedComp = this._getFormChildById(linkedId);

				if (linkedComp) {
					ret += linkedComp._getAccessibilityAction();
				}
				else {
					ret += str;
				}
			}
		}
		return action;
	};

	_pComponent._getAccessibilityParentValue = function (accessibility) {
		var label = "";
		var type = nexacro._accessibilitydescreadtype;
		if ((type & 0x01) == 0x01) {
			var _label = this._getAccessibilityLabel(accessibility);
			if (_label) {
				label = _label;
			}
		}
		if ((type & 0x02) == 0x02 && this.accessibility_action) {
			var _action = " " + this._getAccessibilityAction(accessibility);
			if (_action) {
				label += _action;
			}
		}
		if ((type & 0x04) == 0x04 && this.accessibility_description) {
			var _description = " " + this._getAccessibilityDescription(accessibility);
			if (_description) {
				label += _description;
			}
		}
		return label;
	};

	_pComponent._setAccessibilityRole = function (role) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityRole(role);
		}
	};

	_pComponent._setAccessibilityLabel = function (label) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityLabel(label);
		}
	};

	_pComponent._setAccessibilityEnable = function (enable) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityEnable(enable);
		}
	};

	_pComponent._setAccessibilityDescription = function (desc) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityDescription(desc);
		}
	};

	_pComponent._setAccessibilityAction = function (action) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityAction(action);
		}
	};

	_pComponent._setAccessibilityDescLevel = function (desclevel) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityDescLevel(desclevel);
		}
	};

	_pComponent._setAccessibilityValue = function (value, bfocus) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityValue(value, this._input_element, bfocus);
		}
	};

	_pComponent._setAccessibilityStatDisabled = function (disabled) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatDisabled(disabled);
		}
	};

	_pComponent._setAccessibilityStatHidden = function (hidden) {
		var control_elem = this._control_element;
		if (control_elem) {
			if (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) {
				if (!this._skip_mobile_tabfocus && !this.accessibilityenable) {
					hidden = true;
				}
			}

			control_elem.setElementAccessibilityStatHidden(hidden);
		}
	};

	_pComponent._setAccessibilityStatChecked = function (checked) {
		if (this._control_element) {
			this._control_element.setElementAccessibilityStatChecked(checked);
		}
	};

	_pComponent._setAccessibilityStatPressed = function (pressed) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatPressed(pressed);
		}
	};

	_pComponent._setAccessibilityStatSelected = function (selected) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatSelected(selected);
		}
	};

	_pComponent._setAccessibilityStatExpanded = function (expanded) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatExpanded(expanded);
		}
	};

	_pComponent._setAccessibilityStatLive = function (v) {
		this._accessibilitylive = v;
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatLive(v);
		}
	};

	_pComponent._setAccessibilityStatAutoComplete = function (autocomplete) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityStatAutoComplete(autocomplete);
		}
	};

	_pComponent._setAccessibilityFlagHasPopup = function (haspopup) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagHasPopup(haspopup);
		}
	};

	_pComponent._setAccessibilityFlagFocusable = function (focusable) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagFocusable(focusable);
		}
	};

	_pComponent._setAccessibilityFlagReadOnly = function (readonly) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagReadOnly(readonly);
		}
	};

	_pComponent._setAccessibilityFlagPassword = function (password) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagPassword(password);
		}
	};

	_pComponent._setAccessibilityFlagMultiSelectable = function (multiselectable) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagMultiSelectable(multiselectable);
		}
	};

	_pComponent._setAccessibilityFlagSelectable = function (selectable) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagSelectable(selectable);
		}
	};

	_pComponent._setAccessibilityFlagDefaultButton = function (defaultbutton) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagDefaultButton(defaultbutton);
		}
	};

	_pComponent._setAccessibilityFlagMultiLine = function (multiline) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityFlagMultiLine(multiline);
		}
	};

	_pComponent._setAccessibilityInfoCount = function (count) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoCount(count);
		}
	};

	_pComponent._setAccessibilityInfoIndex = function (index) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoIndex(index);
		}
	};

	_pComponent._setAccessibilityInfoValueMax = function (valuemax) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoValueMax(valuemax);
		}
	};

	_pComponent._setAccessibilityInfoValueMin = function (valuemin) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoValueMin(valuemin);
		}
	};

	_pComponent._setAccessibilityInfoValueCur = function (valuecur) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoValueCur(valuecur);
		}
	};


	_pComponent._setAccessibilityInfoLevel = function (level) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityInfoLevel(level);
		}
	};

	_pComponent._setAccessibilityHotKey = function (hotkey) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityHotKey(hotkey);
		}
	};

	_pComponent._setAccessibilityActiveDescendant = function (element, subcomp) {
		var control_elem = this._control_element;
		if (control_elem) {
			control_elem.setElementAccessibilityActiveDescendant(subcomp ? subcomp : this, element);
		}
	};

	_pComponent._notifyAccessibility = function (label, notifyevent) {
		if (this._control_element) {
			this._control_element.notifyAccessibility(label, notifyevent);
		}
	};

	_pComponent._setAccessibilityStatFlag = function (status, userstatus) {
		if (nexacro._Browser != "Runtime" && !nexacro._isDesktop() && this._block_read_aria_stat) {
			this._setAccessibilityStatHidden(true);
		}

		if (status == "disabled") {
			this._setAccessibilityStatDisabled(true);
		}
		else {
			this._setAccessibilityStatDisabled(false);
		}

		if (status == "readonly") {
			this._setAccessibilityFlagReadOnly(true);
		}
		else if (status == "enabled") {
			this._setAccessibilityFlagReadOnly(false);
		}



		if (this._use_selected_status) {
			var is_selected = this._userstatusmap.selected ? true : false;
			if (this instanceof nexacro._RadioItemControl || this instanceof nexacro.CheckBox) {
				this._setAccessibilityStatChecked(is_selected);
			}
			else {
				this._setAccessibilityStatSelected(is_selected);
			}
		}

		if (userstatus == "selected" && status != "focused") {
			if (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) {
				this._setAccessibilityStatFocus();

				var window = this._getWindow();
				if (window && window._keydown_element) {
					this._apply_setfocus(true);
				}
			}
		}

		if (nexacro._Browser != "Runtime" && !nexacro._isDesktop() && (this._block_read_aria_stat && this.accessibilityenable)) {
			nexacro._OnceCallbackTimer.callonce(this, function () {
				this._setAccessibilityStatHidden(false);
			}, 100);
		}
	};

	_pComponent._isAccessibilityEnable = function () {
		if (!nexacro._enableaccessibility || !this.accessibilityenable) {
			return false;
		}
		return true;
	};

	_pComponent._isItemAccessibilityEnable = function () {
	};

	_pComponent._updateAccessibilityLabel = function () {
		var control_elem = this.getElement();
		if (control_elem) {
			control_elem._updateAccessibilityLabel();
		}
	};
	_pComponent._setAccessibilityStatFocus = function (evt_name) {
		var env = nexacro.getEnvironment();
		if (this._control_element) {
			this._control_element.setElementAccessibilityStatFocus();

			var form = this._getForm();
			if (form) {
				var _window = form._getWindow();
				_window._accessibility_last_focused_comp = this._getRootComponent(this);
			}
		}

		if (env) {
			env._set_accessibility_history(this, evt_name);
		}
	};

	_pComponent._setAccessibilityStatKillFocus = function () {
		if (this._control_element) {
			this._control_element.setElementAccessibilityStatKillFocus();
		}
	};

	_pComponent._setAccessibilityNotifyEvent = function (direction) {
		var control_element = this.getElement();
		if (control_element && control_element.accessibilityenable) {
			if (direction !== undefined) {
				this._resetScrollPos(this, this._adjust_left, this._adjust_top, this._adjust_left + this._adjust_width, this._adjust_top + this._adjust_height, (direction > 0) ? 0 : 1);
			}

			control_element.notifyAccessibility();
			var form = this._getForm();
			if (form) {
				var _window = form._getWindow();
				_window._accessibility_last_focused_comp = this._getRootComponent(this);
			}
			return true;
		}
		return false;
	};

	_pComponent._setAccessibilityInfoByHover = function () {
		return this._setAccessibilityNotifyEvent();
	};

	_pComponent._clearAccessibilityInfoByHover = nexacro._emptyFn;
	_pComponent._setAccessibilityReadOnly = nexacro._emptyFn;


	delete _pComponent;
}

