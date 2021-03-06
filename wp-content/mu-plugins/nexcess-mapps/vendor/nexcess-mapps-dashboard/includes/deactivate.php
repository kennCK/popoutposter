<?php
/**
 * Our deactivation call.
 *
 * @package PlatformSelfInstall
 */

// Declare our namespace.
namespace Nexcess\MAPPS\Dashboard\Deactivate;

// Set our aliases.
use Nexcess\MAPPS\Dashboard as Core;

/**
 * Delete various options when deactivating the plugin.
 *
 * @return void
 */
function deactivate() {

	// Include our action so that we may add to this later.
	do_action( Core\HOOK_PREFIX . 'deactivate_process' );

	// And flush our rewrite rules.
	flush_rewrite_rules();
}
register_deactivation_hook( Core\FILE, __NAMESPACE__ . '\deactivate' );
