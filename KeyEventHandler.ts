  /*
    Key Values: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
  */
    export const KeyboardKeyValues =  {
        SPECIALVALUES: "SpecialValues",
        MODIFIERKEYS: "ModifierKeys",
        WHITESPACEKEYS: "WhitespaceKeys",
        NAVIGATIONKEYS: "NavigationKeys",
        EDITINGKEYS: "EditingKeys",
        UIKEYS: "UIKeys",
        DEVICEKEYS: "DeviceKeys",
        IMEANDCOMPOSITIONKEYS: "IMEandCompositionKeys",
        FUNCTIONKEYS: "FunctionKeys",
        PHONEKEYS: "PhoneKeys",
        MULTIMEDIAKEYS: "MultimediaKeys",
        AUDIOCONTROLKEYS: "AudioControlKeys",
        TVCONTROLKEYS: "TVControlKeys",
        MEDIACONTROLLERKEYS: "MediaControllerKeys",
        SPEECHRECOGNITIONKEYS: "SpeechRecognitionKeys",
        DOCUMENTKEYS: "DocumentKeys",
        APPLICATIONSELECTORKEYS: "ApplicationSelectorKeys",
        BROWSERCONTROLKEYS: "BrowserControlKeys",
        NUMERICKEYPADKEYS: "NumericKeypadKeys"
      }
    
      /*
        Payload 
      */
      interface IKeyValuesPayload {
          action: string;
          payload: KeyboardEvent;
      };
    
      /*
        Whitespace Keys
      */
      export const WhitespaceKeyActions = {
        ENTER: "Enter",
        TAB: "Tab",
        SPACE:" "
      }
      
      const whitespaceKeyActions = () => ({
        [WhitespaceKeyActions.ENTER]: () => { /* do whatever */ },
        [WhitespaceKeyActions.TAB]: () => { /* do whatever */ },
        [WhitespaceKeyActions.SPACE]: () => { /* do whatever */ }
      });
    
      /*
        Navigation Keys
      */
      export const NavigationKeys = {
        ARROWDOWN: "ArrowDown",
        ARROWLEFT: "ArrowLeft",
        ARROWRIGHT: "ArrowRight",
        ARROWUP: "ArrowUp",
        END: "End",
        HOME: "Home",
        PAGEDOWN: "PageDown",
        PAGEUP: "PageUp"
      }
    
      const navigationKeyActions = () => ({
        [NavigationKeys.ARROWDOWN]: () => { /* do whatever */ },
        [NavigationKeys.ARROWLEFT]: () => { /* do whatever */ },
        [NavigationKeys.ARROWRIGHT]: () => { /* do whatever */ },
        [NavigationKeys.ARROWUP]: () => { /* do whatever */ },
        [NavigationKeys.END]: () => { /* do whatever */ },
        [NavigationKeys.HOME]: () => { /* do whatever */ },
        [NavigationKeys.PAGEDOWN]: () => { /* do whatever */ },
        [NavigationKeys.PAGEUP]: () => { /* do whatever */ },
      });
    
      /*
        ActionHandler
      */
      const handleKeyActions = (payload: IKeyValuesPayload) => ({
        [KeyboardKeyValues.WHITESPACEKEYS]: whitespaceKeyActions(),
        [KeyboardKeyValues.NAVIGATIONKEYS]: navigationKeyActions(),
      });
    