// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
//            (c) 2011 panacoda GmbH. All rights reserved.
// Creator:   Sebastian
// Date:      05.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

m_require('core/utility/logger.js');

/**
 * @class
 *
 * The root object for ModelRegistry.
 *
 * Model Registry is a central point for all models to get their Global Unique Identifier,
 * which is important for storage (guid is primary key as default).
 *
 * @extends M.Object
 */
M.ModelRegistry = M.Object.extend(
/** @scope M.ModelRegistry.prototype */ {

    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.ModelRegistry',


    /**
     * An array containing objects that save the model's name and their next GUId.
     * Acts globally.
     *
     * @type Object
     */
    registry: {},

    /**
     * Calculates the next ID for a model named by 'modelName'.
     *
     * @param {String} modelName The name of the model, e.g. 'Person'.
     * @returns {Number} The next internal model id for the model identified by modelName parameter.
     */
    getNextId: function(modelName) {
        if(this.registry[modelName] !== undefined && this.registry[modelName] !== null && typeof(this.registry[modelName] === 'number')) {
            this.registry[modelName] = this.registry[modelName] + 1;
            localStorage.setItem(M.Application.getConfig('keyPrefix') + M.Application.name + M.Application.getConfig('keySuffix') + modelName, this.registry[modelName]);
            return this.registry[modelName];
        }
        return null;
    },

    /**
     * Sets the id for a certain model.
     *
     * @param {String} modelName The name of the model, e.g. 'Person'.
     * @param {Number} m_id The id of the model, e.g. 1.
     */
    setId: function(modelName, m_id) {
        if(this.registry[modelName] !== undefined && this.registry[modelName] !== null && typeof(this.registry[modelName] === 'number')) {
            this.registry[modelName] = m_id;
        }
    },

    /**
     * Register a model in the registry.
     * Set nextGUId for this model to initial value 0.
     *
     * @param {String} modelName The name of the model, e.g. 'Person'.
     */
    register: function(modelName) {
        if(!this.registry[modelName]) {
            this.registry[modelName] = 0;
        }
    }

});