// Path object - angular does not support relative paths for templates.
// In order to find templates in the build directory you need to put
// the build paths in this object.
const _buildPath = 'app';
export const PATHS = {
	buildPath: _buildPath,
	componentsPath: _buildPath + '/components',
	directivesPath: _buildPath + '/directives',
	pagesPath: _buildPath + '/pages'
};
