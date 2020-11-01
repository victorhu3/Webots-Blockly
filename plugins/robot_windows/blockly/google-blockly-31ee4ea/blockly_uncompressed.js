// Do not edit this file; automatically generated by build.py.
'use strict';

this.IS_NODE_JS = !!(typeof module !== 'undefined' && module.exports);

this.BLOCKLY_DIR = (function(root) {
  if (!root.IS_NODE_JS) {
    // Find name of current directory.
    var scripts = document.getElementsByTagName('script');
    var re = new RegExp('(.+)[\/]blockly_(.*)uncompressed\.js$');
    for (var i = 0, script; script = scripts[i]; i++) {
      var match = re.exec(script.src);
      if (match) {
        return match[1];
      }
    }
    alert('Could not detect Blockly\'s directory name.');
  }
  return '';
})(this);

this.BLOCKLY_BOOT = function(root) {
  // Execute after Closure has loaded.
goog.addDependency("../../core/block.js", ['Blockly.Block'], ['Blockly.ASTNode', 'Blockly.Blocks', 'Blockly.Connection', 'Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.BlockCreate', 'Blockly.Events.BlockDelete', 'Blockly.Events.BlockMove', 'Blockly.Extensions', 'Blockly.fieldRegistry', 'Blockly.Input', 'Blockly.navigation', 'Blockly.Tooltip', 'Blockly.utils', 'Blockly.utils.deprecation', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.string', 'Blockly.Workspace']);
goog.addDependency("../../core/block_animations.js", ['Blockly.blockAnimations'], ['Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/block_drag_surface.js", ['Blockly.BlockDragSurfaceSvg'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/block_dragger.js", ['Blockly.BlockDragger'], ['Blockly.blockAnimations', 'Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockMove', 'Blockly.Events.Ui', 'Blockly.InsertionMarkerManager', 'Blockly.utils.Coordinate', 'Blockly.utils.dom']);
goog.addDependency("../../core/block_events.js", ['Blockly.Events.BlockBase', 'Blockly.Events.BlockChange', 'Blockly.Events.BlockCreate', 'Blockly.Events.BlockDelete', 'Blockly.Events.BlockMove', 'Blockly.Events.Change', 'Blockly.Events.Create', 'Blockly.Events.Delete', 'Blockly.Events.Move'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.registry', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.xml']);
goog.addDependency("../../core/block_svg.js", ['Blockly.BlockSvg'], ['Blockly.ASTNode', 'Blockly.Block', 'Blockly.blockAnimations', 'Blockly.blockRendering.IPathObject', 'Blockly.constants', 'Blockly.ContextMenu', 'Blockly.ContextMenuRegistry', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.Events.BlockMove', 'Blockly.Msg', 'Blockly.navigation', 'Blockly.RenderedConnection', 'Blockly.TabNavigateCursor', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.deprecation', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Rect']);
goog.addDependency("../../core/blockly.js", ['Blockly'], ['Blockly.constants', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.inject', 'Blockly.navigation', 'Blockly.Procedures', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.colour', 'Blockly.utils.Size', 'Blockly.Variables', 'Blockly.WidgetDiv', 'Blockly.WorkspaceSvg', 'Blockly.Xml']);
goog.addDependency("../../core/blocks.js", ['Blockly.Blocks'], []);
goog.addDependency("../../core/bubble.js", ['Blockly.Bubble'], ['Blockly.Scrollbar', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.Svg', 'Blockly.utils.userAgent', 'Blockly.Workspace']);
goog.addDependency("../../core/bubble_dragger.js", ['Blockly.BubbleDragger'], ['Blockly.Bubble', 'Blockly.constants', 'Blockly.Events', 'Blockly.Events.CommentMove', 'Blockly.utils', 'Blockly.utils.Coordinate']);
goog.addDependency("../../core/comment.js", ['Blockly.Comment'], ['Blockly.Bubble', 'Blockly.Css', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.utils.deprecation', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg', 'Blockly.utils.userAgent', 'Blockly.Warning']);
goog.addDependency("../../core/components/component.js", ['Blockly.Component', 'Blockly.Component.Error'], ['Blockly.utils.dom', 'Blockly.utils.IdGenerator', 'Blockly.utils.style']);
goog.addDependency("../../core/connection.js", ['Blockly.Connection'], ['Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockMove', 'Blockly.utils.deprecation', 'Blockly.Xml']);
goog.addDependency("../../core/connection_checker.js", ['Blockly.ConnectionChecker'], ['Blockly.constants', 'Blockly.registry']);
goog.addDependency("../../core/connection_db.js", ['Blockly.ConnectionDB'], ['Blockly.constants', 'Blockly.RenderedConnection']);
goog.addDependency("../../core/constants.js", ['Blockly.constants'], []);
goog.addDependency("../../core/contextmenu.js", ['Blockly.ContextMenu'], ['Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Menu', 'Blockly.MenuItem', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Rect', 'Blockly.utils.userAgent', 'Blockly.Xml']);
goog.addDependency("../../core/contextmenu_items.js", ['Blockly.ContextMenuItems'], ['Blockly.constants']);
goog.addDependency("../../core/contextmenu_registry.js", ['Blockly.ContextMenuRegistry'], ['Blockly.ContextMenuItems']);
goog.addDependency("../../core/css.js", ['Blockly.Css'], []);
goog.addDependency("../../core/dropdowndiv.js", ['Blockly.DropDownDiv'], ['Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.style']);
goog.addDependency("../../core/events.js", ['Blockly.Events'], ['Blockly.registry', 'Blockly.utils']);
goog.addDependency("../../core/events_abstract.js", ['Blockly.Events.Abstract'], ['Blockly.Events']);
goog.addDependency("../../core/extensions.js", ['Blockly.Extensions'], ['Blockly.utils']);
goog.addDependency("../../core/field.js", ['Blockly.Field'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Gesture', 'Blockly.Tooltip', 'Blockly.utils', 'Blockly.utils.deprecation', 'Blockly.utils.dom', 'Blockly.utils.Rect', 'Blockly.utils.Size', 'Blockly.utils.style', 'Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/field_angle.js", ['Blockly.FieldAngle'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.fieldRegistry', 'Blockly.FieldTextInput', 'Blockly.utils.dom', 'Blockly.utils.math', 'Blockly.utils.object', 'Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/field_checkbox.js", ['Blockly.FieldCheckbox'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Size']);
goog.addDependency("../../core/field_colour.js", ['Blockly.FieldColour'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.navigation', 'Blockly.utils.aria', 'Blockly.utils.colour', 'Blockly.utils.dom', 'Blockly.utils.IdGenerator', 'Blockly.utils.KeyCodes', 'Blockly.utils.object', 'Blockly.utils.Size']);
goog.addDependency("../../core/field_dropdown.js", ['Blockly.FieldDropdown'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.Menu', 'Blockly.MenuItem', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.aria', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Size', 'Blockly.utils.string', 'Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/field_image.js", ['Blockly.FieldImage'], ['Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Size', 'Blockly.utils.Svg']);
goog.addDependency("../../core/field_label.js", ['Blockly.FieldLabel'], ['Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Size']);
goog.addDependency("../../core/field_label_serializable.js", ['Blockly.FieldLabelSerializable'], ['Blockly.FieldLabel', 'Blockly.fieldRegistry', 'Blockly.utils', 'Blockly.utils.object']);
goog.addDependency("../../core/field_multilineinput.js", ['Blockly.FieldMultilineInput'], ['Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.FieldTextInput', 'Blockly.utils', 'Blockly.utils.aria', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.KeyCodes', 'Blockly.utils.object', 'Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/field_number.js", ['Blockly.FieldNumber'], ['Blockly.fieldRegistry', 'Blockly.FieldTextInput', 'Blockly.utils.aria', 'Blockly.utils.object']);
goog.addDependency("../../core/field_registry.js", ['Blockly.fieldRegistry'], ['Blockly.registry']);
goog.addDependency("../../core/field_textinput.js", ['Blockly.FieldTextInput'], ['Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.fieldRegistry', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.aria', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.KeyCodes', 'Blockly.utils.object', 'Blockly.utils.Size', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/field_variable.js", ['Blockly.FieldVariable'], ['Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.FieldDropdown', 'Blockly.fieldRegistry', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.object', 'Blockly.utils.Size', 'Blockly.VariableModel', 'Blockly.Variables', 'Blockly.Xml']);
goog.addDependency("../../core/flyout_base.js", ['Blockly.Flyout'], ['Blockly.Block', 'Blockly.blockRendering', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Events.VarCreate', 'Blockly.FlyoutCursor', 'Blockly.Gesture', 'Blockly.Marker', 'Blockly.Scrollbar', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Svg', 'Blockly.utils.toolbox', 'Blockly.WorkspaceSvg', 'Blockly.Xml']);
goog.addDependency("../../core/flyout_button.js", ['Blockly.FlyoutButton'], ['Blockly.Css', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/flyout_dragger.js", ['Blockly.FlyoutDragger'], ['Blockly.utils.object', 'Blockly.WorkspaceDragger']);
goog.addDependency("../../core/flyout_horizontal.js", ['Blockly.HorizontalFlyout'], ['Blockly.Block', 'Blockly.constants', 'Blockly.Flyout', 'Blockly.registry', 'Blockly.Scrollbar', 'Blockly.utils', 'Blockly.utils.object', 'Blockly.utils.Rect', 'Blockly.WidgetDiv']);
goog.addDependency("../../core/flyout_vertical.js", ['Blockly.VerticalFlyout'], ['Blockly.Block', 'Blockly.constants', 'Blockly.Flyout', 'Blockly.registry', 'Blockly.Scrollbar', 'Blockly.utils', 'Blockly.utils.object', 'Blockly.utils.Rect', 'Blockly.utils.userAgent', 'Blockly.WidgetDiv']);
goog.addDependency("../../core/generator.js", ['Blockly.Generator'], ['Blockly.constants', 'Blockly.Block']);
goog.addDependency("../../core/gesture.js", ['Blockly.Gesture'], ['Blockly.ASTNode', 'Blockly.blockAnimations', 'Blockly.BlockDragger', 'Blockly.BubbleDragger', 'Blockly.constants', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.FlyoutDragger', 'Blockly.navigation', 'Blockly.Tooltip', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.WorkspaceDragger']);
goog.addDependency("../../core/grid.js", ['Blockly.Grid'], ['Blockly.utils.dom', 'Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/icon.js", ['Blockly.Icon'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Size', 'Blockly.utils.Svg']);
goog.addDependency("../../core/inject.js", ['Blockly.inject'], ['Blockly.BlockDragSurfaceSvg', 'Blockly.Component', 'Blockly.Css', 'Blockly.DropDownDiv', 'Blockly.Events', 'Blockly.Grid', 'Blockly.Msg', 'Blockly.Options', 'Blockly.ScrollbarPair', 'Blockly.Tooltip', 'Blockly.user.keyMap', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.Svg', 'Blockly.utils.userAgent', 'Blockly.WorkspaceDragSurfaceSvg', 'Blockly.WorkspaceSvg']);
goog.addDependency("../../core/input.js", ['Blockly.Input'], ['Blockly.Connection', 'Blockly.constants', 'Blockly.FieldLabel']);
goog.addDependency("../../core/insertion_marker_manager.js", ['Blockly.InsertionMarkerManager'], ['Blockly.blockAnimations', 'Blockly.constants', 'Blockly.Events']);
goog.addDependency("../../core/interfaces/i_accessibility.js", ['Blockly.IASTNodeLocation', 'Blockly.IASTNodeLocationSvg', 'Blockly.IASTNodeLocationWithBlock', 'Blockly.IBlocklyActionable'], []);
goog.addDependency("../../core/interfaces/i_bounded_element.js", ['Blockly.IBoundedElement'], []);
goog.addDependency("../../core/interfaces/i_bubble.js", ['Blockly.IBubble'], []);
goog.addDependency("../../core/interfaces/i_connection_checker.js", ['Blockly.IConnectionChecker'], []);
goog.addDependency("../../core/interfaces/i_contextmenu.js", ['Blockly.IContextMenu'], []);
goog.addDependency("../../core/interfaces/i_copyable.js", ['Blockly.ICopyable'], []);
goog.addDependency("../../core/interfaces/i_deletable.js", ['Blockly.IDeletable'], []);
goog.addDependency("../../core/interfaces/i_deletearea.js", ['Blockly.IDeleteArea'], []);
goog.addDependency("../../core/interfaces/i_flyout.js", ['Blockly.IFlyout'], []);
goog.addDependency("../../core/interfaces/i_movable.js", ['Blockly.IMovable'], []);
goog.addDependency("../../core/interfaces/i_registrable.js", ['Blockly.IRegistrable'], []);
goog.addDependency("../../core/interfaces/i_registrable_field.js", ['Blockly.IRegistrableField'], []);
goog.addDependency("../../core/interfaces/i_selectable.js", ['Blockly.ISelectable'], []);
goog.addDependency("../../core/interfaces/i_styleable.js", ['Blockly.IStyleable'], []);
goog.addDependency("../../core/interfaces/i_toolbox.js", ['Blockly.IToolbox'], []);
goog.addDependency("../../core/interfaces/i_toolbox_item.js", ['Blockly.ICollapsibleToolboxItem', 'Blockly.ISelectableToolboxItem', 'Blockly.IToolboxItem'], []);
goog.addDependency("../../core/keyboard_nav/action.js", ['Blockly.Action'], []);
goog.addDependency("../../core/keyboard_nav/ast_node.js", ['Blockly.ASTNode'], ['Blockly.constants', 'Blockly.utils.Coordinate']);
goog.addDependency("../../core/keyboard_nav/basic_cursor.js", ['Blockly.BasicCursor'], ['Blockly.ASTNode', 'Blockly.Cursor']);
goog.addDependency("../../core/keyboard_nav/cursor.js", ['Blockly.Cursor'], ['Blockly.Action', 'Blockly.ASTNode', 'Blockly.Marker', 'Blockly.navigation', 'Blockly.utils.object']);
goog.addDependency("../../core/keyboard_nav/flyout_cursor.js", ['Blockly.FlyoutCursor'], ['Blockly.Cursor', 'Blockly.navigation', 'Blockly.utils.object']);
goog.addDependency("../../core/keyboard_nav/key_map.js", ['Blockly.user.keyMap'], ['Blockly.utils.KeyCodes', 'Blockly.utils.object']);
goog.addDependency("../../core/keyboard_nav/marker.js", ['Blockly.Marker'], ['Blockly.ASTNode', 'Blockly.navigation']);
goog.addDependency("../../core/keyboard_nav/navigation.js", ['Blockly.navigation'], ['Blockly.Action', 'Blockly.ASTNode', 'Blockly.constants', 'Blockly.utils.Coordinate', 'Blockly.user.keyMap']);
goog.addDependency("../../core/keyboard_nav/tab_navigate_cursor.js", ['Blockly.TabNavigateCursor'], ['Blockly.ASTNode', 'Blockly.BasicCursor', 'Blockly.utils.object']);
goog.addDependency("../../core/marker_manager.js", ['Blockly.MarkerManager'], ['Blockly.Cursor', 'Blockly.Marker']);
goog.addDependency("../../core/menu.js", ['Blockly.Menu'], ['Blockly.utils.aria', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.KeyCodes', 'Blockly.utils.style']);
goog.addDependency("../../core/menuitem.js", ['Blockly.MenuItem'], ['Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.IdGenerator']);
goog.addDependency("../../core/msg.js", ['Blockly.Msg'], ['Blockly.utils.global']);
goog.addDependency("../../core/mutator.js", ['Blockly.Mutator'], ['Blockly.Bubble', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.navigation', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.global', 'Blockly.utils.object', 'Blockly.utils.Svg', 'Blockly.utils.toolbox', 'Blockly.utils.xml', 'Blockly.WorkspaceSvg', 'Blockly.Xml']);
goog.addDependency("../../core/names.js", ['Blockly.Names'], ['Blockly.constants', 'Blockly.Msg']);
goog.addDependency("../../core/options.js", ['Blockly.Options'], ['Blockly.Theme', 'Blockly.Themes.Classic', 'Blockly.registry', 'Blockly.user.keyMap', 'Blockly.utils.IdGenerator', 'Blockly.utils.Metrics', 'Blockly.utils.toolbox', 'Blockly.utils.userAgent', 'Blockly.Xml']);
goog.addDependency("../../core/procedures.js", ['Blockly.Procedures'], ['Blockly.Blocks', 'Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockChange', 'Blockly.Field', 'Blockly.Msg', 'Blockly.Names', 'Blockly.utils.xml', 'Blockly.Workspace', 'Blockly.Xml']);
goog.addDependency("../../core/registry.js", ['Blockly.registry'], []);
goog.addDependency("../../core/rendered_connection.js", ['Blockly.RenderedConnection'], ['Blockly.Connection', 'Blockly.constants', 'Blockly.Events', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.deprecation', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/common/block_rendering.js", ['Blockly.blockRendering'], ['Blockly.registry', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/common/constants.js", ['Blockly.blockRendering.ConstantProvider'], ['Blockly.constants', 'Blockly.utils', 'Blockly.utils.colour', 'Blockly.utils.dom', 'Blockly.utils.Svg', 'Blockly.utils.svgPaths', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/renderers/common/debugger.js", ['Blockly.blockRendering.Debug'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.constants', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/common/drawer.js", ['Blockly.blockRendering.Drawer'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.svgPaths']);
goog.addDependency("../../core/renderers/common/i_path_object.js", ['Blockly.blockRendering.IPathObject'], []);
goog.addDependency("../../core/renderers/common/info.js", ['Blockly.blockRendering.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.Hat', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.StatementInput', 'Blockly.blockRendering.SquareCorner', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.constants']);
goog.addDependency("../../core/renderers/common/marker_svg.js", ['Blockly.blockRendering.MarkerSvg'], ['Blockly.ASTNode', 'Blockly.constants', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/common/path_object.js", ['Blockly.blockRendering.PathObject'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.IPathObject', 'Blockly.Theme', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/common/renderer.js", ['Blockly.blockRendering.Renderer'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.MarkerSvg', 'Blockly.blockRendering.Drawer', 'Blockly.blockRendering.IPathObject', 'Blockly.blockRendering.PathObject', 'Blockly.blockRendering.RenderInfo', 'Blockly.constants', 'Blockly.InsertionMarkerManager']);
goog.addDependency("../../core/renderers/geras/constants.js", ['Blockly.geras.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/geras/drawer.js", ['Blockly.geras.Drawer'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.Drawer', 'Blockly.geras.Highlighter', 'Blockly.geras.RenderInfo', 'Blockly.utils.object', 'Blockly.utils.svgPaths']);
goog.addDependency("../../core/renderers/geras/highlight_constants.js", ['Blockly.geras.HighlightConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.svgPaths']);
goog.addDependency("../../core/renderers/geras/highlighter.js", ['Blockly.geras.Highlighter'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.svgPaths']);
goog.addDependency("../../core/renderers/geras/info.js", ['Blockly.geras', 'Blockly.geras.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.Types', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.constants', 'Blockly.geras.InlineInput', 'Blockly.geras.StatementInput', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/geras/measurables/inputs.js", ['Blockly.geras.InlineInput', 'Blockly.geras.StatementInput'], ['Blockly.utils.object']);
goog.addDependency("../../core/renderers/geras/path_object.js", ['Blockly.geras.PathObject'], ['Blockly.blockRendering.PathObject', 'Blockly.geras.ConstantProvider', 'Blockly.Theme', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/geras/renderer.js", ['Blockly.geras.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.geras.ConstantProvider', 'Blockly.geras.Drawer', 'Blockly.geras.HighlightConstantProvider', 'Blockly.geras.PathObject', 'Blockly.geras.RenderInfo', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/measurables/base.js", ['Blockly.blockRendering.Measurable'], ['Blockly.blockRendering.Types']);
goog.addDependency("../../core/renderers/measurables/connections.js", ['Blockly.blockRendering.Connection', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/measurables/inputs.js", ['Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputConnection', 'Blockly.blockRendering.StatementInput'], ['Blockly.blockRendering.Connection', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/measurables/row_elements.js", ['Blockly.blockRendering.Field', 'Blockly.blockRendering.Hat', 'Blockly.blockRendering.Icon', 'Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.JaggedEdge', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.SquareCorner'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/measurables/rows.js", ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow'], ['Blockly.blockRendering.InputConnection', 'Blockly.blockRendering.InRowSpacer', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/measurables/types.js", ['Blockly.blockRendering.Types'], []);
goog.addDependency("../../core/renderers/minimalist/constants.js", ['Blockly.minimalist.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/minimalist/drawer.js", ['Blockly.minimalist.Drawer'], ['Blockly.blockRendering.Drawer', 'Blockly.utils.object', 'Blockly.minimalist.RenderInfo']);
goog.addDependency("../../core/renderers/minimalist/info.js", ['Blockly.minimalist', 'Blockly.minimalist.RenderInfo'], ['Blockly.utils.object']);
goog.addDependency("../../core/renderers/minimalist/renderer.js", ['Blockly.minimalist.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.utils.object', 'Blockly.minimalist.ConstantProvider', 'Blockly.minimalist.Drawer', 'Blockly.minimalist.RenderInfo']);
goog.addDependency("../../core/renderers/thrasos/info.js", ['Blockly.thrasos', 'Blockly.thrasos.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.StatementInput', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/thrasos/renderer.js", ['Blockly.thrasos.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.thrasos.RenderInfo', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/zelos/constants.js", ['Blockly.zelos.ConstantProvider'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.constants', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg', 'Blockly.utils.svgPaths']);
goog.addDependency("../../core/renderers/zelos/drawer.js", ['Blockly.zelos.Drawer'], ['Blockly.blockRendering.ConstantProvider', 'Blockly.blockRendering.Drawer', 'Blockly.blockRendering.Types', 'Blockly.utils.object', 'Blockly.zelos.RenderInfo']);
goog.addDependency("../../core/renderers/zelos/info.js", ['Blockly.zelos', 'Blockly.zelos.RenderInfo'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.ExternalValueInput', 'Blockly.blockRendering.InlineInput', 'Blockly.blockRendering.InputRow', 'Blockly.blockRendering.Measurable', 'Blockly.blockRendering.NextConnection', 'Blockly.blockRendering.OutputConnection', 'Blockly.blockRendering.PreviousConnection', 'Blockly.blockRendering.RenderInfo', 'Blockly.blockRendering.RoundCorner', 'Blockly.blockRendering.Row', 'Blockly.blockRendering.SquareCorner', 'Blockly.blockRendering.SpacerRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.Types', 'Blockly.constants', 'Blockly.utils.object', 'Blockly.zelos.BottomRow', 'Blockly.zelos.RightConnectionShape', 'Blockly.zelos.StatementInput', 'Blockly.zelos.TopRow']);
goog.addDependency("../../core/renderers/zelos/marker_svg.js", ['Blockly.zelos.MarkerSvg'], ['Blockly.blockRendering.MarkerSvg', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/zelos/measurables/inputs.js", ['Blockly.zelos.StatementInput'], ['Blockly.blockRendering.StatementInput', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/zelos/measurables/row_elements.js", ['Blockly.zelos.RightConnectionShape'], ['Blockly.blockRendering.Measurable', 'Blockly.blockRendering.Types', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/zelos/measurables/rows.js", ['Blockly.zelos.BottomRow', 'Blockly.zelos.TopRow'], ['Blockly.blockRendering.BottomRow', 'Blockly.blockRendering.TopRow', 'Blockly.blockRendering.SpacerRow', 'Blockly.utils.object']);
goog.addDependency("../../core/renderers/zelos/path_object.js", ['Blockly.zelos.PathObject'], ['Blockly.blockRendering.PathObject', 'Blockly.zelos.ConstantProvider', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg']);
goog.addDependency("../../core/renderers/zelos/renderer.js", ['Blockly.zelos.Renderer'], ['Blockly.blockRendering', 'Blockly.blockRendering.Renderer', 'Blockly.constants', 'Blockly.InsertionMarkerManager', 'Blockly.utils.object', 'Blockly.zelos.ConstantProvider', 'Blockly.zelos.Drawer', 'Blockly.zelos.PathObject', 'Blockly.zelos.RenderInfo', 'Blockly.zelos.MarkerSvg']);
goog.addDependency("../../core/requires.js", ['Blockly.requires'], ['Blockly', 'Blockly.Comment', 'Blockly.HorizontalFlyout', 'Blockly.VerticalFlyout', 'Blockly.FlyoutButton', 'Blockly.Generator', 'Blockly.Toolbox', 'Blockly.Trashcan', 'Blockly.VariablesDynamic', 'Blockly.ZoomControls', 'Blockly.Mutator', 'Blockly.Warning', 'Blockly.FieldAngle', 'Blockly.FieldCheckbox', 'Blockly.FieldColour', 'Blockly.FieldDropdown', 'Blockly.FieldLabelSerializable', 'Blockly.FieldImage', 'Blockly.FieldTextInput', 'Blockly.FieldMultilineInput', 'Blockly.FieldNumber', 'Blockly.FieldVariable', 'Blockly.geras.Renderer', 'Blockly.thrasos.Renderer', 'Blockly.zelos.Renderer', 'Blockly.Themes.Classic', 'Blockly.Themes.Dark', 'Blockly.Themes.Deuteranopia', 'Blockly.Themes.HighContrast', 'Blockly.Themes.Tritanopia']);
goog.addDependency("../../core/scrollbar.js", ['Blockly.Scrollbar', 'Blockly.ScrollbarPair'], ['Blockly.Touch', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Metrics', 'Blockly.utils.Svg']);
goog.addDependency("../../core/theme.js", ['Blockly.Theme'], ['Blockly.registry', 'Blockly.utils', 'Blockly.utils.colour', 'Blockly.utils.object']);
goog.addDependency("../../core/theme/classic.js", ['Blockly.Themes.Classic'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/dark.js", ['Blockly.Themes.Dark'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/deuteranopia.js", ['Blockly.Themes.Deuteranopia'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/highcontrast.js", ['Blockly.Themes.HighContrast'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/modern.js", ['Blockly.Themes.Modern'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/tritanopia.js", ['Blockly.Themes.Tritanopia'], ['Blockly.Theme']);
goog.addDependency("../../core/theme/zelos.js", ['Blockly.Themes.Zelos'], ['Blockly.Theme']);
goog.addDependency("../../core/theme_manager.js", ['Blockly.ThemeManager'], ['Blockly.Theme']);
goog.addDependency("../../core/toolbox/category.js", ['Blockly.ToolboxCategory'], ['Blockly.registry', 'Blockly.utils', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.toolbox', 'Blockly.ToolboxItem']);
goog.addDependency("../../core/toolbox/collapsible_category.js", ['Blockly.CollapsibleToolboxCategory'], ['Blockly.registry', 'Blockly.ToolboxCategory', 'Blockly.ToolboxSeparator', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.toolbox', 'Blockly.ToolboxItem']);
goog.addDependency("../../core/toolbox/separator.js", ['Blockly.ToolboxSeparator'], ['Blockly.registry', 'Blockly.ToolboxItem', 'Blockly.utils.dom']);
goog.addDependency("../../core/toolbox/toolbox.js", ['Blockly.Toolbox'], ['Blockly.CollapsibleToolboxCategory', 'Blockly.constants', 'Blockly.Css', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.navigation', 'Blockly.registry', 'Blockly.Touch', 'Blockly.utils', 'Blockly.utils.aria', 'Blockly.utils.dom', 'Blockly.utils.Rect', 'Blockly.utils.toolbox']);
goog.addDependency("../../core/toolbox/toolbox_item.js", ['Blockly.ToolboxItem'], []);
goog.addDependency("../../core/tooltip.js", ['Blockly.Tooltip'], ['Blockly.utils.string']);
goog.addDependency("../../core/touch.js", ['Blockly.Touch'], ['Blockly.constants', 'Blockly.utils', 'Blockly.utils.global', 'Blockly.utils.string']);
goog.addDependency("../../core/touch_gesture.js", ['Blockly.TouchGesture'], ['Blockly.Gesture', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.object']);
goog.addDependency("../../core/trashcan.js", ['Blockly.Trashcan'], ['Blockly.constants', 'Blockly.Scrollbar', 'Blockly.utils.dom', 'Blockly.utils.Rect', 'Blockly.utils.Svg', 'Blockly.utils.toolbox', 'Blockly.Xml']);
goog.addDependency("../../core/ui_events.js", ['Blockly.Events.Ui'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.registry', 'Blockly.utils.object']);
goog.addDependency("../../core/utils.js", ['Blockly.utils'], ['Blockly.Msg', 'Blockly.constants', 'Blockly.utils.colour', 'Blockly.utils.Coordinate', 'Blockly.utils.global', 'Blockly.utils.Rect', 'Blockly.utils.string', 'Blockly.utils.style', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/utils/aria.js", ['Blockly.utils.aria'], []);
goog.addDependency("../../core/utils/colour.js", ['Blockly.utils.colour'], []);
goog.addDependency("../../core/utils/coordinate.js", ['Blockly.utils.Coordinate'], []);
goog.addDependency("../../core/utils/deprecation.js", ['Blockly.utils.deprecation'], []);
goog.addDependency("../../core/utils/dom.js", ['Blockly.utils.dom'], ['Blockly.utils.Svg', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/utils/global.js", ['Blockly.utils.global'], []);
goog.addDependency("../../core/utils/idgenerator.js", ['Blockly.utils.IdGenerator'], []);
goog.addDependency("../../core/utils/keycodes.js", ['Blockly.utils.KeyCodes'], []);
goog.addDependency("../../core/utils/math.js", ['Blockly.utils.math'], []);
goog.addDependency("../../core/utils/metrics.js", ['Blockly.utils.Metrics'], []);
goog.addDependency("../../core/utils/object.js", ['Blockly.utils.object'], []);
goog.addDependency("../../core/utils/rect.js", ['Blockly.utils.Rect'], []);
goog.addDependency("../../core/utils/size.js", ['Blockly.utils.Size'], []);
goog.addDependency("../../core/utils/string.js", ['Blockly.utils.string'], []);
goog.addDependency("../../core/utils/style.js", ['Blockly.utils.style'], ['Blockly.utils.Coordinate', 'Blockly.utils.Size']);
goog.addDependency("../../core/utils/svg.js", ['Blockly.utils.Svg'], []);
goog.addDependency("../../core/utils/svg_paths.js", ['Blockly.utils.svgPaths'], []);
goog.addDependency("../../core/utils/toolbox.js", ['Blockly.utils.toolbox'], ['Blockly.constants']);
goog.addDependency("../../core/utils/useragent.js", ['Blockly.utils.userAgent'], ['Blockly.utils.global']);
goog.addDependency("../../core/utils/xml.js", ['Blockly.utils.xml'], []);
goog.addDependency("../../core/variable_events.js", ['Blockly.Events.VarBase', 'Blockly.Events.VarCreate', 'Blockly.Events.VarDelete', 'Blockly.Events.VarRename'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.registry', 'Blockly.utils.object']);
goog.addDependency("../../core/variable_map.js", ['Blockly.VariableMap'], ['Blockly.Events', 'Blockly.Events.VarDelete', 'Blockly.Events.VarRename', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.object']);
goog.addDependency("../../core/variable_model.js", ['Blockly.VariableModel'], ['Blockly.Events', 'Blockly.Events.VarCreate', 'Blockly.utils']);
goog.addDependency("../../core/variables.js", ['Blockly.Variables'], ['Blockly.Blocks', 'Blockly.constants', 'Blockly.Msg', 'Blockly.utils', 'Blockly.utils.xml', 'Blockly.VariableModel', 'Blockly.Xml']);
goog.addDependency("../../core/variables_dynamic.js", ['Blockly.VariablesDynamic'], ['Blockly.Variables', 'Blockly.Blocks', 'Blockly.Msg', 'Blockly.utils.xml', 'Blockly.VariableModel']);
goog.addDependency("../../core/warning.js", ['Blockly.Warning'], ['Blockly.Bubble', 'Blockly.Events', 'Blockly.Events.Ui', 'Blockly.Icon', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Svg']);
goog.addDependency("../../core/widgetdiv.js", ['Blockly.WidgetDiv'], ['Blockly.utils.style']);
goog.addDependency("../../core/workspace.js", ['Blockly.Workspace'], ['Blockly.ConnectionChecker', 'Blockly.Events', 'Blockly.Options', 'Blockly.utils', 'Blockly.utils.math', 'Blockly.VariableMap']);
goog.addDependency("../../core/workspace_audio.js", ['Blockly.WorkspaceAudio'], ['Blockly.constants', 'Blockly.utils', 'Blockly.utils.global', 'Blockly.utils.userAgent']);
goog.addDependency("../../core/workspace_comment.js", ['Blockly.WorkspaceComment'], ['Blockly.Events', 'Blockly.Events.CommentChange', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.xml']);
goog.addDependency("../../core/workspace_comment_render_svg.js", ['Blockly.WorkspaceCommentSvg.render'], ['Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/workspace_comment_svg.js", ['Blockly.WorkspaceCommentSvg'], ['Blockly.Css', 'Blockly.Events', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove', 'Blockly.Events.Ui', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.object', 'Blockly.utils.Rect', 'Blockly.utils.Svg', 'Blockly.WorkspaceComment']);
goog.addDependency("../../core/workspace_drag_surface_svg.js", ['Blockly.WorkspaceDragSurfaceSvg'], ['Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("../../core/workspace_dragger.js", ['Blockly.WorkspaceDragger'], ['Blockly.utils.Coordinate']);
goog.addDependency("../../core/workspace_events.js", ['Blockly.Events.FinishedLoading'], ['Blockly.Events', 'Blockly.Events.Ui', 'Blockly.registry', 'Blockly.utils.object']);
goog.addDependency("../../core/workspace_svg.js", ['Blockly.WorkspaceSvg'], ['Blockly.BlockSvg', 'Blockly.blockRendering', 'Blockly.ConnectionDB', 'Blockly.constants', 'Blockly.ContextMenuRegistry', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Gesture', 'Blockly.Grid', 'Blockly.MarkerManager', 'Blockly.Msg', 'Blockly.navigation', 'Blockly.Options', 'Blockly.registry', 'Blockly.ThemeManager', 'Blockly.Themes.Classic', 'Blockly.TouchGesture', 'Blockly.utils', 'Blockly.utils.Coordinate', 'Blockly.utils.dom', 'Blockly.utils.Metrics', 'Blockly.utils.object', 'Blockly.utils.Rect', 'Blockly.utils.Svg', 'Blockly.utils.toolbox', 'Blockly.Workspace', 'Blockly.WorkspaceAudio', 'Blockly.WorkspaceDragSurfaceSvg', 'Blockly.Xml']);
goog.addDependency("../../core/ws_comment_events.js", ['Blockly.Events.CommentBase', 'Blockly.Events.CommentChange', 'Blockly.Events.CommentCreate', 'Blockly.Events.CommentDelete', 'Blockly.Events.CommentMove'], ['Blockly.Events', 'Blockly.Events.Abstract', 'Blockly.registry', 'Blockly.utils.Coordinate', 'Blockly.utils.object', 'Blockly.utils.xml']);
goog.addDependency("../../core/xml.js", ['Blockly.Xml'], ['Blockly.constants', 'Blockly.Events', 'Blockly.Events.BlockCreate', 'Blockly.Events.FinishedLoading', 'Blockly.Events.VarCreate', 'Blockly.utils', 'Blockly.utils.dom', 'Blockly.utils.global', 'Blockly.utils.xml']);
goog.addDependency("../../core/zoom_controls.js", ['Blockly.ZoomControls'], ['Blockly.constants', 'Blockly.Css', 'Blockly.Scrollbar', 'Blockly.Touch', 'Blockly.utils.dom', 'Blockly.utils.Svg']);
goog.addDependency("base.js", [], []);

// Load Blockly.
goog.require('Blockly.requires')

delete root.BLOCKLY_DIR;
delete root.BLOCKLY_BOOT;
delete root.IS_NODE_JS;
};

if (this.IS_NODE_JS) {
  this.BLOCKLY_BOOT(this);
  module.exports = Blockly;
} else {
  document.write('<script src="' + this.BLOCKLY_DIR +
      '/closure/goog/base.js"></script>');
  document.write('<script>this.BLOCKLY_BOOT(this);</script>');
}
