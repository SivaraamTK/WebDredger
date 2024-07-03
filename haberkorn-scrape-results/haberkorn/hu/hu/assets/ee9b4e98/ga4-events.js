< html > < head > < meta name = "color-scheme"
content = "light dark" > < /head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">analyticsEventHandler = {};

(function(aeh, undefined) {
    function loadGAEvents($) {
        var searchParam = "s";

        var beaconSupport = (typeof navigator.sendBeacon !== 'undefined');

        var decimalSeparator = ',';

        var $productContainer = $('.product');

        var onSearchSite = document.location.search.match(new RegExp("[\?|&amp;]" + searchParam + "=")) & amp; & amp;
        ($('.ga-summary').length || $('[data-ga-search-category]').length) ? true: false;
        var onProductDetailSite = $('#product').length;

        var level = $('#level').data('level') ? $('#level').data('level') : '-';


        aeh.trackSimple = function(category, action, label, nonInteraction) {
            if (GA_OPTED_OUT) {
                return;
            }
            try {
                var params = {
                    'event_action': action,
                    'event_category': category,
                    'event_label': label
                };
                if (nonInteraction) {
                    params['non_interaction'] = true;
                }
                gtag('event', category, params);
            } catch (err) {}
        };

        $(document).on('aeh.tracksimple', function(e, category, action, label) {
            // use $(document).trigger('aeh.tracksimple', ['mycat', 'myaction', 'mylabel']); from outside
            aeh.trackSimple(category, action, label);
        });

        aeh.trackSimpleObject = function(object) {
            if (GA_OPTED_OUT) {
                return;
            }
            if (object.event_category & amp; & amp; object.event_action) {
                try {
                    gtag('event', object.event_category, object);
                } catch (err) {}
            }
        };

        var clickedLinks = 0;
        var trackedLinks = 0;

        aeh.trackLink = function(event, category, action, label, nonInteraction) {
            if (GA_OPTED_OUT) {
                return;
            }
            var params = {
                'event_action': action,
                'event_category': category,
                'event_label': label
            };
            if (nonInteraction) {
                params['non_interaction'] = true;
            }
            if (beaconSupport) {
                params['transport_type'] = 'beacon';
                try {
                    gtag('event', category, params);
                } catch (err) {}
            } else {
                clickedLinks++;
                var target = $(event.target).closest('a');
                if (target.length & gt; 0) {
                    var targetUrl = target.attr("href");
                    var targetTarget = event.ctrlKey || event.which === 2 & amp; & amp;
                    (event.type === "mouseup" || event.type === "mousedown") ?
                    "_blank" : ($.trim(target.attr("target")) ? target.attr("target") : "_self");
                    if (targetTarget === "_blank") {
                        try {
                            gtag('event', category, params);
                        } catch (err) {}
                    } else {
                        var hitCallbackDone = false;
                        var hitCallback = function() {
                            if (!hitCallbackDone) {
                                hitCallbackDone = true;
                                trackedLinks++;
                                if (clickedLinks & gt; 0 & amp; & amp; trackedLinks & gt; 0 & amp; & amp; trackedLinks & gt; = clickedLinks) { //Use "&gt;=" to consider cases in which trackedLinks gets incremented simultaneously by multiple trackers
                                    trackedLinks = clickedLinks = 0; //Reset counters (as we use "&gt;=") to avoid multiple sets of location.href
                                    location.href = targetUrl;
                                }
                            }
                        };
                        event.preventDefault();
                        try {
                            params['event_callback'] = hitCallback;
                            gtag('event', category, params);
                            setTimeout(hitCallback, 1000);
                        } catch (err) {
                            hitCallback();
                        }
                    }
                }
            }
        };

        /**
         * This function returns the event label
         *
         * @callback eventLabelCallback
         * @param {Node} elem The element node
         * @returns {string}
         */
        /**
         * This function returns the event data (category, action, label)
         *
         * @callback eventDataCallback
         * @param {Node} elem The element node
         * @returns {Object} Object containing the event data {category: '', action: '', label: ''(, nonInteraction: true)}
         */
        /**
         * This function tracks link clicks considering mousewheel clicks and CTRL clicks
         *
         * Possible arguments:
         * aeh.trackLinkClick(selector, delegateSelector, category, action, labelOrLabelCallback, nonInteraction)
         * aeh.trackLinkClick(selector, delegateSelector, category, action, labelOrLabelCallback)
         * aeh.trackLinkClick(selector, category, action, labelOrLabelCallback, nonInteraction)
         * aeh.trackLinkClick(selector, category, action, labelOrLabelCallback)
         * aeh.trackLinkClick(selector, delegateSelector, callback)
         * aeh.trackLinkClick(selector, callback)
         *
         * @param {*} selector
         * @param {string} [delegateSelector] optional
         * @param {string|eventDataCallback} categoryOrCallback Event category or function which returns the event data as object (can be used e.g. if category, action and label depend on element)
         * @param {string} action Event action
         * @param {(string|eventLabelCallback)} labelOrLabelCallback Event label or function which returns the label (can be used e.g. if label depends on element)
         * @param {boolean} [nonInteraction] Whether this event should be non-interactive (defaults to false)
         */
        aeh.trackLinkClick = function(selector, delegateSelector, categoryOrCallback, action, labelOrLabelCallback, nonInteraction) {
            if (GA_OPTED_OUT) {
                return;
            }
            switch (arguments.length) {
                case 2:
                    if (typeof delegateSelector !== 'function') {
                        return;
                    }
                    categoryOrCallback = delegateSelector;
                    delegateSelector = null;
                    break;
                case 3:
                    if (typeof categoryOrCallback !== 'function') {
                        return;
                    }
                    break;
                case 4:
                    nonInteraction = labelOrLabelCallback;
                    labelOrLabelCallback = action;
                    action = categoryOrCallback;
                    categoryOrCallback = delegateSelector;
                    delegateSelector = null;
                    break;
            }
            var handler = function(event) {
                var elem = $(event.target).closest('a').get(0);
                if (elem !== undefined & amp; & amp;
                    (event.type !== "mouseup" || event.which === 2)) {
                    if (typeof categoryOrCallback === 'function') {
                        var eventData = categoryOrCallback(elem);
                        if (eventData & amp; & amp; typeof eventData === 'object' & amp; & amp; typeof eventData.category !== 'undefined' & amp; & amp; typeof eventData.action !== 'undefined' & amp; & amp; typeof eventData.label !== 'undefined') {
                            aeh.trackLink(event, eventData.category, eventData.action, eventData.label, eventData.nonInteraction);
                        }
                    } else {
                        if (typeof labelOrLabelCallback === 'function') {
                            var label = labelOrLabelCallback(elem);
                            if (typeof label === 'string') {
                                aeh.trackLink(event, categoryOrCallback, action, label, nonInteraction);
                            }
                        } else {
                            aeh.trackLink(event, categoryOrCallback, action, labelOrLabelCallback, nonInteraction);
                        }
                    }
                }
            };
            if (delegateSelector) {
                $(selector).on('click mouseup', delegateSelector, handler);
            } else {
                $(selector).on('click mouseup', handler);
            }
        };

        var viewTrackedElements = [];
        var trackViewCounter = 0;

        function trackViews($el, category, action, labelOrLabelCallback) {
            if (GA_OPTED_OUT) {
                return;
            }
            var windowResizeTimeout;
            var $window = $(window);
            var counter = trackViewCounter++;
            var elementOffsets = [];
            checkAndTrack();
            $window.on('scroll.trackViews' + counter, function() {
                checkAndTrack();
            }).on('resize', function() {
                clearTimeout(windowResizeTimeout);
                windowResizeTimeout = setTimeout(function() {
                    checkAndTrack();
                }, 500);
            });

            function checkAndTrack() {
                var allTracked = true;
                var windowTop = $window.scrollTop();
                var windowBottom = windowTop + window.innerHeight;

                $el.each(function(i) {
                    if (elementOffsets[i] === undefined) {
                        elementOffsets[i] = {
                            top: false,
                            bottom: false
                        };
                    }
                    if (elementOffsets[i]) {
                        var $this = $(this);
                        var offsetTop = $this.offset().top;
                        if (!elementOffsets[i].top) {
                            if (offsetTop & gt; windowTop & amp; & amp; offsetTop & lt; windowBottom) {
                                elementOffsets[i].top = true;
                            }
                        }
                        if (!elementOffsets[i].bottom) {
                            var offsetBottom = offsetTop + $this.outerHeight();
                            if (offsetBottom & gt; windowTop & amp; & amp; offsetBottom & lt; windowBottom) {
                                elementOffsets[i].bottom = true;
                            }
                        }
                        if (elementOffsets[i].top & amp; & amp; elementOffsets[i].bottom) {
                            elementOffsets[i] = null;
                            if (typeof labelOrLabelCallback === 'function') {
                                var label = labelOrLabelCallback(this);
                                if (typeof label === 'string') {
                                    aeh.trackSimple(category, action, label, true);
                                }
                            } else {
                                aeh.trackSimple(category, action, labelOrLabelCallback, true);
                            }
                            viewTrackedElements.push(this);
                        } else {
                            allTracked = false;
                        }
                    }
                });
                if (allTracked) {
                    $window.off('scroll.trackViews' + counter);
                }
            }
        }

        function trackSwiperViews(swiperInstance, category, action, labelOrLabelCallback) {
            if (GA_OPTED_OUT) {
                return;
            }
            if (swiperInstance & amp; & amp; swiperInstance.el & amp; & amp; swiperInstance.on & amp; & amp; swiperInstance.off) {
                var windowResizeTimeout;
                var $window = $(window);
                var $el = $(swiperInstance.el);
                var slideCount = $(swiperInstance.slides).filter(':not(.swiper-slide-duplicate)').length;
                var viewedSlides = [];
                var counter = trackViewCounter++;
                var allTracked = false;
                var widthHasChanged = true;
                var viewportHasChanged = true;
                var visible = false;
                var inViewport = false;
                var listenersAttached = false;
                $window.on('resize', function() {
                    widthHasChanged = viewportHasChanged = true;
                    clearTimeout(windowResizeTimeout);
                    windowResizeTimeout = setTimeout(function() {
                        if (isVisible()) {
                            checkAndTrack();
                            attachListeners();
                        } else {
                            detachListeners();
                        }
                    }, 300);
                });
                if (isVisible()) {
                    checkAndTrack();
                    attachListeners();
                }

                function attachListeners() {
                    if (!listenersAttached) {
                        listenersAttached = true;
                        $window.on('scroll.trackViews' + counter, function() {
                            viewportHasChanged = true;
                            checkAndTrack();
                        });
                        swiperInstance.on('slideChange', checkAndTrack);
                    }
                }

                function detachListeners() {
                    if (listenersAttached) {
                        $window.off('scroll.trackViews' + counter);
                        swiperInstance.off('slideChange', checkAndTrack);
                    }
                }

                function checkAndTrack() {
                    if (!allTracked & amp; & amp; isVisible() & amp; & amp; isInViewport()) {
                        var realIndex = swiperInstance.realIndex;
                        var activeIndex = swiperInstance.activeIndex;
                        if (realIndex & gt; = 0 & amp; & amp; viewedSlides.indexOf(realIndex) === -1) {
                            viewedSlides.push(realIndex);
                            if (viewedSlides.length & gt; = slideCount) {
                                allTracked = true;
                                $window.off('scroll.trackViews' + counter);
                                swiperInstance.off('slideChange', checkAndTrack);
                            }
                            if (typeof labelOrLabelCallback === 'function') {
                                var label = labelOrLabelCallback(swiperInstance.slides[activeIndex]);
                                if (typeof label === 'string') {
                                    aeh.trackSimple(category, action, label, true);
                                }
                            } else {
                                aeh.trackSimple(category, action, labelOrLabelCallback, true);
                            }
                        }
                    }
                }

                function isInViewport() {
                    if (viewportHasChanged) {
                        viewportHasChanged = false;
                        var windowTop = $window.scrollTop();
                        var windowHeight = window.innerHeight;
                        var windowBottom = windowTop + windowHeight;
                        var elHeight = $el.outerHeight();
                        var minVisibleHeight = parseInt(Math.min(elHeight * 0.75, windowHeight * 0.7));
                        var offsetTop = $el.offset().top;
                        inViewport = offsetTop & gt; = windowTop - elHeight - minVisibleHeight & amp; & amp;
                        offsetTop & lt; = windowBottom - minVisibleHeight;
                    }
                    return inViewport;
                }

                function isVisible() {
                    if (widthHasChanged) {
                        widthHasChanged = false;
                        visible = $el.is(':visible');
                    }
                    return visible;
                }
            }
        }

        aeh.ecListClick = function(productObj, list) {
            if (GA_OPTED_OUT) {
                return;
            }
            if (productObj.item_id || productObj.item_name) {
                try {
                    var select_item_params = {
                        'items': [
                            productObj
                        ]
                    };

                    if (list) {
                        select_item_params.item_list_name = list
                    };

                    gtag('event', 'select_item', select_item_params)
                } catch (err) {}
            }
        };

        var played = false;
        aeh.playProductVideo = function(itemGroupId) {
            if (GA_OPTED_OUT) {
                return;
            }
            if (!played) {
                played = true;

                //Label: Item group ID
                aeh.trackSimple('Downloads', 'Play', 'Product Detail Page Video - Item Group ID ' + itemGroupId + ' Level ' + level);
            }
        };

        aeh.applyProductFilter = function(filterName, callback) {
            if (GA_OPTED_OUT) {
                if (typeof callback === 'function') {
                    callback();
                }
                return;
            }
            if (beaconSupport) {
                try {
                    gtag('event', 'Product Filters', {
                        'event_action': 'Apply',
                        'event_category': 'Product Filters',
                        'event_label': 'Filter Name ' + filterName,
                        'transport_type': 'beacon'
                    });
                    if (typeof callback === 'function') {
                        callback();
                    }
                } catch (err) {}
            } else {
                var hitCallbackDone = false;
                var hitCallback = function() {
                    if (!hitCallbackDone) {
                        hitCallbackDone = true;
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                };
                try {
                    gtag('event', 'Product Filters', {
                        'event_action': 'Apply',
                        'event_callback': hitCallback,
                        'event_category': 'Product Filters',
                        'event_label': 'Filter Name ' + filterName
                    });
                    setTimeout(function() {
                        hitCallback();
                    }, 1000);
                } catch (err) {
                    hitCallback();
                }
            }
        };

        aeh.scrollToSection = function($section, id, category) {
            if ($('#product').length) {
                $(document).on('vue-mounted', function(event, key) {
                    if (key == 'PDP') {
                        aeh._scrollToSection($section, id, category);
                    }
                });
            } else {
                aeh._scrollToSection($section, id, category);
            }
        }

        aeh._scrollToSection = function($section, id, category) {
            var canIntersectionObserver = 'IntersectionObserver' in window;
            if (canIntersectionObserver) {
                function handler(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting & amp; & amp; $section.attr('data-scrolled') == 'false' & amp; & amp; $section.attr('data-clicked') == 'false') {
                            aeh.trackSimple(category, 'Scroll to', 'Content Section ' + $section.data('navtitle') + ' Level ' + level);
                            $section.attr('data-scrolled', 'true');
                        }
                    });
                }
                var observer = new IntersectionObserver(handler);
                observer.observe(document.getElementById(id));
            }
        }

        if (GA_OPTED_OUT) {
            return;
        }


        /*	Pagination (currently only for search results) * not tested */
        aeh.trackLinkClick('.ga-pagination', 'a', 'Search Results - Pagination', 'Click', function(elem) {
            //Label: Search term
            var s = document.location.search,
                sr = new RegExp(searchParam + "\=([^&amp;]+)"),
                sm = s.match(sr);
            if (sm != null) {
                return 'Search String ' + ga_convertSearchString(sm[1]);
            }
            return null;
        });

        /*	Item group search table - Click */
        if (onSearchSite) {
            $('.ga-productItem').find('a:not(.ga-catLink, .ga-manuLink)').on('click', function(e, triggered) {
                if (typeof triggered == 'undefined' || !triggered) {
                    //Label: Item group ID
                    var label = $(e.target).closest('.ga-productItem').parent().attr('data-key');
                    //Can be simple because links are tracked again (Product lists)
                    aeh.trackSimple('Search Results - Search table', 'Click', 'Item Group ID ' + label);
                }
            });
        }


        /*	Campaign boxes */
        if ($('.ga-campaign').length) {
            var getCampaignName = function(elem) {
                var name = $(elem).attr('data-ga-name');
                if (name) {
                    return 'Shop ' + name;
                }
            };
            // This See event causes thousands of additional requests (campaign boxes are directly visible on start page)
            var viewedCampaigns = [];
            trackViews($(':not(.swiper-slide) &gt; .ga-campaign'), 'Campaigns', 'See', function(elem) {
                var name = getCampaignName($(elem).find('a[data-ga-name]'));
                if (name & amp; & amp; viewedCampaigns.indexOf(name) === -1) {
                    viewedCampaigns.push(name);
                    return name;
                }
            });
            trackSwiperViews(window.swiperCamp, 'Campaigns', 'See', function(elem) {
                var name = getCampaignName($(elem).find('a[data-ga-name]'));
                if (name & amp; & amp; viewedCampaigns.indexOf(name) === -1) {
                    viewedCampaigns.push(name);
                    return name;
                }
            });

            //Track "See" if not already tracked before clicking (for correct tunnel flow)
            aeh.trackLinkClick('.ga-campaign &gt; a', 'Campaigns', 'See', function(elem) {
                var name = getCampaignName(elem);
                if (name & amp; & amp; viewedCampaigns.indexOf(name) === -1) {
                    viewedCampaigns.push(name);
                    return name;
                }
            }, true);

            aeh.trackLinkClick('.ga-campaign &gt; a', 'Campaigns', 'Click', getCampaignName);
        }


        /*	Recently Viewed */
        aeh.trackLinkClick('.ga-rv', 'a', 'Recently Viewed Items', 'Click', function(elem) {
            //Label: Item group ID
            var label = $(elem).closest('.ga-rv-slide').attr('data-key');
            if (label) {
                return 'Item Group ID ' + label;
            }
        });


        /*	Product Filters */
        aeh.trackLinkClick('.ga-pf', 'a', 'Recently Viewed Items', 'Click', function(elem) {
            //Label: Item group ID
            var label = $(elem).closest('.ga-rv-slide').attr('data-key');
            if (label) {
                return 'Item Group ID ' + label;
            }
        });


        /*	Contact Boxes */
        function trackContact(e, label) {
            if ($(e.target).closest('.topic').length === 0) {
                aeh.trackSimple('Contact Boxes', 'Click', label);
            }
        }
        if (onProductDetailSite) {
            var $productParent = $('#product').parent();
            $productParent.on('click', '.ga-contactbox a.ga-mail', function(e) {
                trackContact(e, 'Email');
            });
            $productParent.on('click', '.ga-contactbox a.ga-tel', function(e) {
                trackContact(e, 'Phone');
            });
        } else {
            var $contactBox = $('.ga-contactbox');
            $contactBox.find('.ga-mail').on('click', function(e) {
                trackContact(e, 'Email');
            });
            $contactBox.find('.ga-tel').on('click', function(e) {
                trackContact(e, 'Phone');
            });
        }

        /*	Cart - Delivery Address */
        var $cart = $('#cart');
        $cart.on('change', 'select.ga-delivery-addr', function() {
            aeh.trackSimple('Carts', 'Edit', 'Delivery Address', true);
        });

        /*	Cart - Delivery Date */
        $cart.on('change', '.ga-delivery-date input', function() {
            aeh.trackSimple('Carts', 'Edit', 'Delivery Date', true);
        });


        /*	Search Menu Suggestions */
        var $searchbar = $('.ga-searchbar');
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-search', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var label = $elem.attr('data-ga-label');
            if (label) {
                return 'Search ' + label;
            }
        });
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-category', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var label = $elem.attr('data-ga-label');
            if (label) {
                return 'Category ' + label;
            }
        });
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-content', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var cUrl = $elem.attr('href');
            var cIndex = cUrl.indexOf("#");
            var label = '#t3' + $elem.attr('data-ga-label');
            if (cIndex !== -1) {
                label = cUrl.substring(cIndex);
            }
            if (label) {
                return 'Content ' + label;
            }
        });
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-brand', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var label = $elem.attr('data-ga-label');
            if (label) {
                return 'Brand ' + label;
            }
        });
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-product', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var itemGroupId = $elem.attr('data-ga-id');
            var itemGroupTitle = $elem.attr('data-ga-title');
            if (itemGroupId & amp; & amp; itemGroupTitle) {
                return 'Item Group ' + itemGroupTitle + ' Item Group ID ' + itemGroupId;
            }
        });
        aeh.trackLinkClick($searchbar, 'a.ga-suggest-all-results', 'Search Suggest Panel', 'Click', function(elem) {
            var $elem = $(elem);
            var allResultsText = $elem.attr('data-ga-title');
            if (allResultsText) {
                return allResultsText;
            }
        });

        /*	Configurator */
        var $myConfigurations = $('.ga-my-configurations');
        if ($myConfigurations.length) {
            $myConfigurations.find('.ga-download-configuration').on('click', function() {
                aeh.trackSimple('Configurators', 'Click', 'PDF Download Saved Configuration');
            });
            aeh.trackLinkClick($myConfigurations, '.ga-view-configuration', 'Configurators', 'Click', 'View Saved Configuration');
        }
        var $configurationSuccess = $('.ga-configuration-success');
        if ($configurationSuccess.length) {
            var configurationType = $configurationSuccess.attr('data-ga-type');
            $configurationSuccess.on('click', '.ga-configuration-pdf', function() {
                aeh.trackSimple('Configurators', 'Click', 'Configuration as PDF ' + configurationType);
            });
            aeh.trackLinkClick($configurationSuccess, '.ga-new-configuration', 'Configurators', 'Click', 'New Configuration ' + configurationType);
        }
        var $configurationContainer = $('.ga-configuration-container');
        if ($configurationContainer.length) {
            var configType = $configurationContainer.attr('data-ga-type');
            $configurationContainer.on('click', '.ga-configuration-pdf', function() {
                aeh.trackSimple('Configurators', 'Click', 'Configuration as PDF ' + configType);
            });
        }


        /*	External Links */
        aeh.trackLinkClick(document, 'a', 'External Links', 'Click', function(elem) {
            if (elem.href & amp; & amp; elem.hostname & amp; & amp; !/^(mailto|tel|javascript):/.test(elem.href) & amp; & amp; elem.hostname.substring(elem.hostname.lastIndexOf(".", elem.hostname.lastIndexOf(".") - 1)) !== location.hostname.substring(location.hostname.lastIndexOf(".", location.hostname.lastIndexOf(".") - 1)) & amp; & amp; !$(elem).is('.gaIgnoreExternal')) {
                return elem.href;
            }
            return null;
        }, true);


        /** DOWNLOADS **/

        /*	CAD Download */
        /*	Default Download - Single product */
        /*	Default Download - Item group */
        $productContainer.on('click', 'a.ga-download', function(e) {
            var $this = $(this);
            var partNumber = $(this).attr('data-partnumber');

            if ($this.attr('data-type') == 'CAD') {
                aeh.trackSimple('Downloads', 'Download', 'Product Detail Page CAD - Part Number ' + partNumber + ' Level ' + level);
            } else {
                //Label: Item ID / Item group ID
                var label = partNumber ? 'Product Detail Page Default Download Single Product - Part Number ' + partNumber : 'Product Detail Page Default Download Item Group - Item Group ID ' + $('#product').parent().attr('data-key') + ' Level ' + level;
                aeh.trackSimple('Downloads', 'Download', label);
            }
        });


        /** FAQs **/

        if ($('#faqs').length) {
            var $faqs = $('#faqs');

            aeh.scrollToSection($faqs, 'faqs', 'FAQ');

            $faqs.on('click', '.card', function() {
                if ($(this).hasClass('collapsed')) {
                    var faqId = $('div.answer', $(this)).attr('id');
                    var pos = $(this).index() + 1;
                    aeh.trackSimple('FAQ', 'Click', 'Expand FAQ Card #' + faqId + ' Position ' + pos + ' Level ' + level);
                }
            });

            $faqs.on('click', '.btn-more', function() {
                var faqId = $(this).closest('div.answer').attr('id');
                var pos = $(this).index() + 1;
                aeh.trackSimple('FAQ', 'Click', 'Read More #' + faqId + ' Position ' + pos + ' Level ' + level);
            });

            $faqs.on('click', '.show-more', function() {
                if (!$(this).hasClass('less')) {
                    aeh.trackSimple('FAQ', 'Click', 'Show More Level ' + level);
                }
            });

            $faqs.on('click', '.show-more', function() {
                if ($(this).hasClass('less')) {
                    aeh.trackSimple('FAQ', 'Click', 'Show Less Level ' + level);
                }
            });

            $faqs.on('click', '.card', function() {
                if (!$(this).hasClass('collapsed')) {
                    var faqId = $('div.answer', $(this)).attr('id');
                    var pos = $(this).index() + 1;
                    aeh.trackSimple('FAQ', 'Click', 'Close FAQ Card #' + faqId + ' Position ' + pos + ' Level ' + level);
                }
            });

            $faqs.on('click', '.btn-ask', function() {
                aeh.trackSimple('FAQ', 'Click', 'Ask a Question Level ' + level);
            });

            /* FAQ Forms */
            var $askModal = $('.ga-ask-modal');

            $askModal.on('change', '#contactform-body', function() {
                aeh.trackSimple('FAQ Forms', 'Fill', 'First Form Field - Frage');
            });

            $askModal.on('click', 'button[type=submit]', function() {
                aeh.trackSimple('FAQ Forms', 'Click', 'Send Button');
            });

            $askModal.on('click', 'button[type=reset]', function() {
                aeh.trackSimple('FAQ Forms', 'Click', 'Cancel Button');
            });

            $askModal.on('click', 'button.close', function() {
                aeh.trackSimple('FAQ Forms', 'Click', 'Close X');
            });

            $askModal.on('click', function(e) {
                if (!$(e.target).closest('.modal-content').length) {
                    aeh.trackSimple('FAQ Forms', 'Click', 'Close By Clicking Outside');
                }
            })

            $(document).on('click', '.ga-ask-success-modal .modal-footer button', function() {
                aeh.trackSimple('FAQ Forms', 'Click', 'Thank You Page Close Button');
            });

            $(document).on('click', '.ga-ask-success-modal button.close', function() {
                aeh.trackSimple('FAQ Forms', 'Click', 'Thank You Page Close X');
            });

            $(document).on('click', '.ga-ask-success-modal', function(e) {
                if (!$(e.target).closest('.modal-content').length) {
                    aeh.trackSimple('FAQ Forms', 'Click', 'Thank You Page Close By Clicking Outside');
                }
            });

        }

        /** CLICK &amp; COLLECT **/

        if ($('#order-header').length) {
            $(document).on('click', '#order-header .delivery-option input', function(e) {
                var deliveryOption;
                if (e.originalEvent !== undefined) {
                    deliveryOption = $(this).closest('.delivery-option').data('ga-label');
                    aeh.trackSimple('Carts', 'Click', 'Delivery Option ' + deliveryOption)
                }
            });

            $(document).on('click', '#confirmDeliveryWarning', function() {
                aeh.trackSimple('ClickCollect', 'Click', 'All Right Button')
            });

            $(document).on('click', '#revertDeliveryPreparation', function() {
                aeh.trackSimple('ClickCollect', 'Click', 'No, Order All Articles For Delivery Service Button')
            });

            $(document).on('change', '#order-delivery_email', function() {
                aeh.trackSimple('ClickCollect Forms', 'Fill', 'Change E-Mail Address')
            });

            $(document).on('change', '#order-delivery_email', function() {
                aeh.trackSimple('ClickCollect Forms', 'Fill', 'Phone Number For Text Message')
            });

            $(document).on('click', '#saveNotification', function() {
                aeh.trackSimple('ClickCollect Forms', 'Click', 'Save Details for Notification Button')
            });
        }

        if ($('.order-approval-pending').length) {
            $(document).on('click', '#toCart', function() {
                aeh.trackSimple('ClickCollect Forms', 'Click', 'Back To Shopping Cart')
            });
        }

        /** LANGUAGE **/

        if ($('.languageDropdown').length) {
            $(document).on('click', '.languageDropdown a', function() {
                aeh.trackSimple('Language Dropdown Menu', 'Click', $(this).text());
            });
        }

        /** STICKY CONTACT **/

        if ($('#flap').length) {
            var $contactForm = $('#contactboxflap .ga-contactform');
            $(document).on('click', '#flap', function() {
                aeh.trackSimple('Sticky Contakt', 'Expand', 'Contact Form');
            });
            $contactForm.on('change', '#contactboxflap-body', function() {
                aeh.trackSimple('Sticky Contakt', 'Fill', $(this).data('title'));
            });
            $contactForm.on('click', '#contactboxflap-callback', function() {
                aeh.trackSimple('Sticky Contakt', 'Click', 'Request Recall');
            });
            $contactForm.on('click', 'button[type=submit]', function() {
                aeh.trackSimple('Sticky Contakt', 'Send', 'Contact Form');
            });
        }

        /** GUIDE **/

        if ($('#guide').length) {
            var $guide = $('#guide');

            if ($('.sticky-navbar').length) {
                $(document).on('click', '.dropdown.guide .nav-link', function() {
                    var title = $(this).closest('li.guide').data('title');
                    var topicId = $(this).attr('href');
                    var position = $(this).closest('li').index() + 1;
                    aeh.trackSimple('Anchor Navigation', 'Click', 'Navigation Link ' + title + ' ' + topicId + ' Position ' + position + ' Level ' + level);
                });
            }

            aeh.scrollToSection($guide, 'guide', 'Guide');

            var el = $guide;
            var sc25, sc50, sc75, sc100 = false;
            var scrolled, wrapperHeight, wrapperTop;

            $(document).on('scroll', function() {
                scrolled = $(window).scrollTop();
                wrapperHeight = el.outerHeight();
                wrapperTop = el.offset().top - $(window).height();
                if (scrolled & gt; wrapperTop) {
                    var percentageScrolled = parseInt(((scrolled - wrapperTop) / wrapperHeight) * 100);
                    if (!sc25 & amp; & amp; percentageScrolled & gt; = 25) {
                        aeh.trackSimple('Guide', 'Scroll to', 'Scroll Depth 25 ' + $guide.data('navtitle') + ' Level ' + level);
                        sc25 = true;
                    }
                    if (!sc50 & amp; & amp; percentageScrolled & gt; = 50) {
                        aeh.trackSimple('Guide', 'Scroll to', 'Scroll Depth 50 ' + $guide.data('navtitle') + ' Level ' + level);
                        sc50 = true;
                    }
                    if (!sc75 & amp; & amp; percentageScrolled & gt; = 75) {
                        aeh.trackSimple('Guide', 'Scroll to', 'Scroll Depth 75 ' + $guide.data('navtitle') + ' Level ' + level);
                        sc75 = true;
                    }
                    if (!sc100 & amp; & amp; percentageScrolled & gt; = 100) {
                        aeh.trackSimple('Guide', 'Scroll to', 'Scroll Depth 100 ' + $guide.data('navtitle') + ' Level ' + level);
                        sc100 = true;
                    }
                }
            });

            $(document).on('click', '#guide .overview a', function() {
                var topicId = $(this).attr('href');
                var position = $(this).closest('li').index() + 1;
                aeh.trackSimple('Guide', 'Click', 'Anchor ' + topicId + ' Position ' + position + ' Level ' + level);
            });
        }

        $(document).on('click', '.hero a.guide, .hero-plain a.guide', function() {
            aeh.trackSimple('Hero', 'Click', 'Hero Guide ' + $(this).data('title') + ' Level ' + level);
        });

        $(document).on('click', '.hero a.video', function() {
            aeh.trackSimple('Hero', 'Play', 'Hero Video https://www.youtube.com/watch?v=' + $(this).data('src') + ' Level ' + level);
        });


        /** ENHANCED ECOMMERCE **/


        /*	Product List Clicks - Item group search result * not tested */
        var productListClick = function(e, triggered) {
            if (typeof triggered == 'undefined' || !triggered) {
                var $item = $(e.target).closest('.ga-productItem');
                var $itemWrapper = $item.parent();
                var itemId = $itemWrapper.attr('data-key');
                var productObj = {
                    'item_id': itemId,
                    'item_name': $.trim($itemWrapper.find('.title').text()),
                    'item_category': $item.data('ga-category'),
                    'item_brand': $item.data('ga-brand')
                };
                var isBestsellerItem = $(e.target).closest('.ga-bestseller').length & gt;
                0;
                if (onProductDetailSite || isBestsellerItem) {
                    productObj.index = $itemWrapper.index() + 1;
                } else {
                    var pos = $(e.target).closest('a').get(0).pathname.replace(/.*?([^\/]*)(\/$|$)/, '$1'); //Get last URL segment (which should be the list position)
                    if (isNaN(pos)) {
                        pos = $('.ga-summary').text().replace(/(\d+)(| )-(| )\d+.*$/, '$1'); //Try to get current page position
                        if (!isNaN(pos) & amp; & amp; pos & gt; 0) {
                            productObj.index = parseInt(pos) + $itemWrapper.index();
                        }
                    } else {
                        productObj.index = parseInt(pos) + 1;
                    }
                }
                var list = onProductDetailSite ? "Related products" : (onSearchSite ? "Search result" : (isBestsellerItem ? "Bestseller" : "Product list"));

                if ($(e.target).closest('#recommendations').length & gt; 0) {
                    var pos = parseInt($(e.target).closest('[data-key]').index() + 1);
                    var partnumber = $(e.target).closest('.tileitem').find('.price').data('partnumber') ? $(e.target).closest('.tileitem').find('.price').data('partnumber') : '-';

                    if (isGuest) {
                        partnumber = $(e.target).closest('.tileitem').find('.show-btn').attr('ga-partnumber') ? $(e.target).closest('.tileitem').find('.show-btn').attr('ga-partnumber') : '-';
                        if ($(e.target).is('.ga-loginLink')) {
                            aeh.trackSimple('Recommendations', 'Click', 'Login Message Product Item Product ID ' + partnumber + ' Position ' + pos + ' Level ' + level);
                        } else {
                            aeh.trackSimple('Recommendations', 'Click', 'Product Item Guest Product ID ' + partnumber + ' Position ' + pos + ' Level ' + level);
                        }
                    } else {
                        aeh.trackSimple('Recommendations', 'Click', 'Product Item Product ID ' + partnumber + ' Position ' + pos + ' Level ' + level);
                    }
                } else {
                    aeh.ecListClick(productObj, list);
                    //Label: Item group ID
                    aeh.trackLink(e, 'Product Lists', 'Click', 'Item Group ID ' + itemId);
                }
            }
        };
        $('.ga-productItem').find('a:not(.ga-catLink, .ga-manuLink)').on('click', productListClick);
        $productContainer.on('click', '.ga-productItem a:not(.ga-catLink, .ga-manuLink)', productListClick); //On detail page items are not available on DOM ready

        if ($('.registration').length & gt; 0) {

            var trackRegistration = function(e, triggered) {

                var label = '';

                var isNewCustomer = (_scenario === 'new_customer');

                var category = isNewCustomer ? 'Registration New Customer' : 'Registration Existing Customer';

                switch (_step) {
                    case 'company-data':
                        label = isNewCustomer ? 'Step 1 Company Information Added' : '';
                        break;
                    case 'personal-data':
                        label = isNewCustomer ? 'Step 2 Personal Information Added' : 'Step 1 Personal Information Added';
                        break;
                    case 'interests':
                        label = isNewCustomer ? 'Step 3 Sortiment' : 'Step 2 Sortiment';
                        var interests = '';
                        $('.interests').find('input:checked').each(function(i) {
                            interests += ($(this).siblings('.custom-control-description').html()) + ' | '
                        });
                        if (interests !== '') {
                            interests = interests.substring(0, interests.length - 3);
                            label += ' ' + interests;
                        }
                        label += ' Added';
                        break;
                    case 'user-data':
                        label = isNewCustomer ? 'Step 4 Registration Form Submit' : 'Step 3 Registration Form Submit';
                        break;
                }
                label !== '' ? aeh.trackSimple(category, 'Submit', label, false) : null;
            };
            $('.registration').find('.btn-next').on('click', trackRegistration);
            aeh.trackLinkClick('.ga-registration-new-customer', null, 'Registration New Customer', 'Submit', 'Start Registration');
            aeh.trackLinkClick('.ga-registration-existing-customer', null, 'Registration Existing Customer', 'Submit', 'Start Registration');
        }

        /** ORDER HISTORY **/

        /* Order history open */
        if ($('.order-history-open').length) {
            $(document).on('click', '.nav-order-history a:not(.active)', function() {
                aeh.trackSimple('Order History Open Orders', 'Click', 'Navigation ' + $(this).text());
            });

            $(document).on('click', 'tr.parent:not(.open) button.details-control', function() {
                aeh.trackSimple('Order History Open Orders', 'Click', 'Detail Control Open');
            });

            $(document).on('click', '.position:not(.delivery-details-open) button.btn-delivery-details', function() {
                aeh.trackSimple('Order History Open Orders', 'Click', $(this).data('original-title'));
            });

            $(document).on('click', '.position button.btn-cart', function() {
                aeh.trackSimple('Carts', 'Add', 'Part Number ' + $(this).closest('.position').find('.partnumber').text());
            });

            $(document).on('click', '.position a.btn-mail', function() {
                aeh.trackSimple('Order History Open Orders', 'Click', $(this).data('title'));
            });

            $(document).on('keyup', '#orderSearch:not(.searched)', function() {
                aeh.trackSimple('Order History Open Orders', 'Fill', 'Order Search');
                $(this).addClass('searched');
            });

            $(document).on('click', '.ordertypefilter:not(.clicked), #w2-kvdate input:not(.clicked), #w3-kvdate input:not(.clicked), .show-open-positions:not(.clicked)', function() {
                aeh.trackSimple('Order History Open Orders', 'Click', 'Filter Usage ' + $(this).data('title'));
                $(this).addClass('clicked');
            });
        }

        /* Order history completed */
        if ($('.order-history-completed').length) {
            $(document).on('click', '.nav-order-history a:not(.active)', function() {
                aeh.trackSimple('Order History Completed Orders', 'Click', 'Navigation ' + $(this).text());
            });

            $(document).on('click', 'tr.parent:not(.open) button.details-control', function() {
                aeh.trackSimple('Order History Completed Orders', 'Click', 'Detail Control Open');
            });

            $(document).on('click', '.position:not(.delivery-details-open) button.btn-delivery-details', function() {
                aeh.trackSimple('Order History Completed Orders', 'Click', $(this).data('original-title'));
            });

            $(document).on('click', '.position button.btn-cart', function() {
                aeh.trackSimple('Carts', 'Add', 'Part Number ' + $(this).closest('.position').find('.partnumber').text());
            });

            $(document).on('click', '.position a.btn-mail', function() {
                aeh.trackSimple('Order History Completed Orders', 'Click', $(this).data('title'));
            });

            $(document).on('keyup', '#orderSearch:not(.searched)', function() {
                aeh.trackSimple('Order History Completed Orders', 'Fill', 'Order Search');
                $(this).addClass('searched');
            });

            $(document).on('click', '.ordertypefilter:not(.clicked), #w2-kvdate input:not(.clicked), #w3-kvdate input:not(.clicked)', function() {
                aeh.trackSimple('Order History Completed Orders', 'Click', 'Filter Usage ' + $(this).data('title'));
                $(this).addClass('clicked');
            });
        }

        /** SEARCHED PRODUCT DETAIL PAGE PAGINATION **/
        $(document).on('click', '.product-pagination &gt; button', function() {
            var s = $('#search').val();
            if (s !== '') {
                aeh.trackSimple('Search Results - Product Pagination', 'Click', 'Search String ' + s);
            }
        });
        /** CART 2 **/
        if ($('.ga-cart').length) {

            /* Order Header */
            $(document).on('click', '#cart .ga-order-header-save', function() {
                aeh.trackSimple('Order Header', 'Apply', 'Edited Order Data');
            });

            $(document).on('click', '#cart #item-search ~ .dropdown-menu', function() {
                aeh.trackSimple('Order Header', 'Click', 'Order Header Fast Entry Suggestion');
            });

            /* Cart tools */

            $(document).on('submit', '#cart #order-template-selector-form', function() {
                var templateId = $('#ordertemplateselectorform-ordertemplateid').val() == 0 ? 'New' : $('#ordertemplateselectorform-ordertemplateid').val();
                aeh.trackSimple('Cart Tool', 'Add', 'Order Template - Order Template ID ' + templateId);
            });

            $(document).on('click', '#cart:not(.user-order-cart) .order-items-buttons .ga-delete', function() {
                aeh.trackSimple('Cart Tool', 'Remove', 'Article from Cart');
            });

            $(document).on('click', '#cart .order-items-buttons .ga-download', function() {
                aeh.trackSimple('Cart Tool', 'Download', 'CSV-File');
            });

            $(document).on('click', '#cart .order-items-buttons .ga-email', function() {
                aeh.trackSimple('Cart Tool', 'Send', 'CSV as E-mail');
            });

            $(document).on('click', '#cart #order-template-selector-form .ga-addToTemplate', function() {
                var templateId = $(this).closest('form').find('select').val();
                templateId = templateId == 0 ? 'new' : templateId;
                aeh.trackSimple('Cart Tool', 'Add', 'Order Template - Order Template ID ' + templateId);
            });

            $(document).on('click', '#cart .order-items-buttons .ga-edit', function() {
                aeh.trackSimple('Cart Tool', 'Apply', 'Edit selected Item Data');
            });

            $(document).on('click', '#cart .ga-edit-item-data', function() {
                aeh.trackSimple('Cart Tool Position Level', 'Apply', 'Edit Item Data');
            });

            $(document).on('click', '#cart .qtyWrap .bootstrap-touchspin button', function() {
                aeh.trackSimple('Cart Tool Position Level', 'Edit', 'Order Quantity');
            });

            $(document).on('click', '#cart:not(.user-order-cart) .ga-delete-item', function() {
                aeh.trackSimple('Cart Tool Position Level', 'Remove', 'Article from Cart');
            });

            /* Super User Cart Tools */

            $(document).on('click', '#cart.user-order-cart .order-items-buttons .ga-delete', function() {
                aeh.trackSimple('Cart Tool', 'Remove', 'Article from Cart by Superuser');
            });

            $(document).on('click', '#cart.user-order-cart .ga-delete-item', function() {
                aeh.trackSimple('Cart Tool Position Level', 'Remove', 'Article from Cart by Superuser');
            });

            /* Cart */
            $(document).on('click', '#cart .ga-action-buttons button', function() {
                aeh.trackSimple('Cart', 'Click', $(this).data('ga-title'));
            });

            /* Delivery */
            $(document).on('click', '#cart .delivery-options label.delivery-option:not(.active)', function() {
                if (!$(this).attr('ga-tracked')) {
                    aeh.trackSimple('Delivery', 'Apply', 'Delivery Option ' + $(this).data('ga-label'));
                    $(this).attr('ga-tracked', true);
                }
            });

            $(document).on('click', '#cart .ga-apply-consignee', function() {
                aeh.trackSimple('Delivery', 'Apply', 'Consignees from existing list');
            });

            $(document).on('click', '#cart #shipping-partial-delivery-btn', function() {
                var partialDelivery = vm.partialDelivery ? 'on' : 'off';
                aeh.trackSimple('Delivery', 'Click', 'Partial Deliveries ' + partialDelivery);
            });

            $(document).on('change', '#cart .date input', function() {
                aeh.trackSimple('Delivery', 'Edit', 'Delivery Date');
            });

            $(document).on('click', '#cart .actions button.ga-shipping', function() {
                aeh.trackSimple('Delivery', 'Click', $(this).data('ga-title'));
            });

            /* Payment */
            $(document).on('click', '#cart .payment-options label', function() {
                aeh.trackSimple('Payment', 'Apply', 'Payment Option ' + $(this).data('ga-label'));
            });

            $(document).on('click', '#cart .actions button.ga-payment', function() {
                aeh.trackSimple('Payment', 'Click', $(this).data('ga-title'));
            });

            /* Verification */
            $(document).on('click', '#cart #switch-verification-fast-checkout button, #cart #switch-verification-fast-checkout label', function() {
                var fastCheckout = vm.fastCheckout ? 'on' : 'off';
                aeh.trackSimple('Verification', 'Click', 'Fast checkout ' + fastCheckout);
            });


        }
        /* Order confirmation */
        if ($('.order-confirmation').length) {
            var label = 'Confirmation Page Order ID ';
            if ($('.order-approval-pending').length) {
                label = 'Forwarding Confirmation Page Order ID ';
            }
            var orderID = $('.order-confirmation').data('order-id');
            aeh.trackSimple('Order confirmation', 'See', label + orderID);

            $(document).on('click', '.order-confirmation .ga-view-order', function() {
                var gaLabel = $(this).data('ga-label');
                aeh.trackSimple('Order confirmation', 'Click', gaLabel);
            });

            $(document).on('click', '.order-confirmation .ga-home-link', function() {
                var gaLabel = $(this).data('ga-label');
                aeh.trackSimple('Order confirmation', 'Click', gaLabel);
            });
            $(document).on('click', '.ga-productItem a.stretched-link', function(e, triggered) {
                if (typeof triggered == 'undefined' || !triggered) {
                    //Label: Item group ID
                    var label = $(e.target).closest('.ga-productItem').parent().attr('data-key');
                    //Can be simple because links are tracked again (Product lists)
                    aeh.trackSimple('Order confirmation', 'Click', 'Suitabel Group ID ' + label);
                }
            });
        }


        /** CORPORATE NAVIGATION **/

        $(document).on('click', '.ga-headerMenu &gt; li a', function() {
            var $this = $(this);
            var label = $this.data('gaLabel') ? $this.data('gaLabel') : $this.text() ? $this.text() : '-';
            if (label) {
                aeh.trackSimple('Corporate Navigation', 'Click', label);
            }
        });

        /*	Account Dropdown Menu */
        aeh.trackLinkClick('.ga-accountDropdown a', function(elem) {
            var $elem = $(elem);
            var label = $elem.attr('data-ga-label');
            if (label) {
                var eventData = {
                    action: 'Click',
                    label: label,
                    category: 'Account Dropdown Menu'
                };
                return eventData;
            }
        });


        /** Mini-Banner &amp; Tips **/

        $(document).on('click', '.ga-MiniBannerBtn', function() {
            var $this = $(this);
            var id = $this.closest('.mini-banner').data('id') ? parseInt($this.closest('.mini-banner').data('id')) : '-';
            var pos = $this.closest('.ga-miniWrapperPos').length & gt;
            0 ? parseInt($this.closest('.ga-miniWrapperPos').index() + 1) : '-';
            var miniBannerLevel = $('#level').data('level') ? $('#level').data('level') : '-';
            var miniBannerCat = 'Mini Banner';

            if ($this.closest('#brands-menu').length & gt; 0) {
                miniBannerLevel = 'Navigation';
                miniBannerCat = 'Shopping Navigation';
            } else if ($this.closest('#services').length & gt; 0) {
                miniBannerLevel = 'Product Service Overview';
            } else if ($this.closest('#brands').length & gt; 0) {
                miniBannerLevel = 'Brand Overview';
            } else if ($this.closest('#recommendations').length & gt; 0 & amp; & amp; !$this.closest('.frontpage-ccp').length) {
                miniBannerCat = 'Recommendations';
            } else if ($this.closest('#recommendations').length & gt; 0 & amp; & amp; $this.closest('.frontpage-ccp').length & gt; 0) {
                miniBannerCat = 'Homepage';
            }

            aeh.trackSimple(miniBannerCat, 'Click', 'Mini Banner #miniBanner' + id + ' Position ' + pos + ' Level ' + miniBannerLevel);
        });

        $(document).on('click', '.ga-tipsLink', function() {
            var $this = $(this);
            var pos = $this.closest('.tips-banner').length & gt;
            0 ? parseInt($this.closest('.tips-banner').index() + 1) : '-';
            var topic = $this.attr('href');
            var text = $this.text();

            aeh.trackSimple('Mini Banner Row', 'Click', 'Mini Banner Row Link ' + text + ' ' + topic + ' Position ' + pos + ' Level ' + level);
        });


        /** SHOPPING NAVIGATION **/

        $(document).on('click', '#subnav .ga-subnavItem a', function() {
            var title = $(this).data('gaTitle');
            if (title) {
                aeh.trackSimple('Shopping Navigation', 'Click', title);
            }
        });

        // Product category menu
        $(document).on('click', '.category-menu a.ga-cat-box', function() {
            var label = $(this).data('gaLabel');
            if ($(this).is('.ga-themepage')) {
                label = 'Theme ' + label;
            }
            if (label) {
                aeh.trackSimple('Shopping Navigation', 'Click', label);
            }
        });

        // Brands menu
        $(document).on('click', '#brands-menu .brands-list-row a', function() {
            var brand = $(this).text();
            if (brand) {
                aeh.trackSimple('Shopping Navigation', 'Click', 'Brand List ' + brand + ' Level Navigation');
            }
        });

        $(document).on('click', '#brands-menu .top-brands a', function() {
            var brand = $(this).data('gaTitle');
            if (brand) {
                aeh.trackSimple('Shopping Navigation', 'Click', 'Swiper Brand ' + brand + ' Level Navigation');
            }
        });

        $(document).on('click', '#brands-menu .ga-showAllBrands', function() {
            var text = $(this).text();
            if (text) {
                aeh.trackSimple('Shopping Navigation', 'Click', text + ' Level Navigation');
            }
        });


        /** PRODUCT SERVICES OVERVIEW **/

        if ($('.product-services-overview').length & gt; 0) {
            var $productServiceOverview = $('.product-services-overview');
            $($productServiceOverview).on('change', '#assortments-dropdown', function() {
                var assortment = $(this).val();
                if (assortment) {
                    aeh.trackSimple('Product Service Overview', 'Click', 'Product Service Assortments Filter ' + assortment);
                }
            });

            $($productServiceOverview).on('click', '.category .card &gt; a', function() {
                var $this = $(this);
                var id = $this.data('id') ? $this.data('id') : '-';
                var assortment = $this.closest('section.category').data('assortment') ? $this.closest('section.category').data('assortment') : '-';
                var pos = $this.closest('.ga-serviceTeaserPos').length & gt;
                0 ? parseInt($this.closest('.ga-serviceTeaserPos').index() + 1) : '-';

                aeh.trackSimple('Product Service Overview', 'Click', 'Product Service Card ' + assortment + ' #product-service' + id + ' Position ' + pos + ' Level Product Services Overview');
            });
        }


        /** RECOMMENDATIONS **/

        if ($('#recommendations').length & gt; 0) {
            var $recommendations = $('#recommendations');
            var recommendationsCat = 'Recommendations';

            if ($('.frontpage-ccp').length & gt; 0) {
                recommendationsCat = 'Homepage';
            }

            aeh.scrollToSection($recommendations, 'recommendations', recommendationsCat);
        }


        /** ANCHOR NAVIGATION **/

        if ($('.sticky-navbar').length) {
            var $stickyNavbar = $('.sticky-navbar');

            $stickyNavbar.find('.nav-link').click(function() {
                var $this = $(this);
                var title = $this.text();
                var stickyNavLevel = level;

                // prevent srcollTo event triggering for passed section
                if ($('.content-section').length & gt; 0 & amp; & amp; !$this.parent('#mb').length & amp; & amp; $this.attr('href') != '#') {
                    $('.content-section:first-of-type').attr('data-clicked', 'true');
                    $($this.attr('href')).prevUntil('.content-section:first-of-type').attr('data-clicked', 'true');
                    $($this.attr('href')).attr('data-clicked', 'true');
                }

                // prevent new flag tracking
                if ($this.find('span.flag')) {
                    var $clone = $this.clone();
                    $clone.find('span.flag').remove();
                    title = $clone.text();
                }

                if ($this.closest('#brands').length & gt; 0) {
                    stickyNavLevel = 'Brand Overview';
                }

                aeh.trackSimple('Anchor Navigation', 'Click', title + ' Level ' + stickyNavLevel);
                $this.attr('data-clicked', 'true');
            })
        }


        /** BRAND OVERVIEW **/

        $(document).on('click', '#brands #top-brands .ga-topBrandLink', function() {
            var $this = $(this);
            var brand = $this.data('gaTitle') ? $this.data('gaTitle') : '-';
            var pos = $this.closest('.ga-topBrandPos').length & gt;
            0 ? parseInt($this.closest('.ga-topBrandPos').index() + 1) : '-';

            aeh.trackSimple('Brand Overview', 'Click', 'Top Brand ' + brand + ' Position ' + pos + ' Level Brand Overview');
        });

        $(document).on('click', '#brands #all-brands .ga-brandLink', function() {
            var brand = $(this).text();
            if (brand) {
                aeh.trackSimple('Brand Overview', 'Click', 'Brand List ' + brand + ' Level Brand Overview');
            }
        });

        $(document).on('change', '#brands #all-brands-assortments', function() {
            var assortment = $(this).val();
            if (assortment) {
                aeh.trackSimple('Brand Overview', 'Click', 'Brand Assortments Filter ' + assortment);
            }
        });


        /** TOPIC TRACKING **/

        if ($('#topics').length & gt; 0) {
            var $topics = $('#topics');
            var topicCat = 'Guide';

            if ($('#guide').length == 0 & amp; & amp; $('#service-detail').length & gt; 0) {
                // only for service detail topics
                topicCat = 'Product Service Detail';

                aeh.scrollToSection($topics, 'topics', topicCat);

                var el = $topics;
                var sc25, sc50, sc75, sc100 = false;
                var scrolled, wrapperHeight, wrapperTop;

                $(document).on('scroll', function() {
                    scrolled = $(window).scrollTop();
                    wrapperHeight = el.outerHeight();
                    wrapperTop = el.offset().top - $(window).height();
                    if (scrolled & gt; wrapperTop) {
                        var percentageScrolled = parseInt(((scrolled - wrapperTop) / wrapperHeight) * 100);
                        if (!sc25 & amp; & amp; percentageScrolled & gt; = 25) {
                            aeh.trackSimple(topicCat, 'Scroll to', 'Scroll Depth 25 Topics Level ' + level);
                            sc25 = true;
                        }
                        if (!sc50 & amp; & amp; percentageScrolled & gt; = 50) {
                            aeh.trackSimple(topicCat, 'Scroll to', 'Scroll Depth 50 Topics Level ' + level);
                            sc50 = true;
                        }
                        if (!sc75 & amp; & amp; percentageScrolled & gt; = 75) {
                            aeh.trackSimple(topicCat, 'Scroll to', 'Scroll Depth 75 Topics Level ' + level);
                            sc75 = true;
                        }
                        if (!sc100 & amp; & amp; percentageScrolled & gt; = 100) {
                            aeh.trackSimple(topicCat, 'Scroll to', 'Scroll Depth 100 Topics Level ' + level);
                            sc100 = true;
                        }
                    }
                });
            }

            $(document).on('click', '#topics .ctopic .topic p a', function() {
                var linkTitle = $(this).attr('title') ? $(this).attr('title') : '-';
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '-';
                aeh.trackSimple(topicCat, 'Click', 'Text Link ' + linkTitle + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .ctopic .topic a', function() {
                if ($(this).find('img').length & gt; 0 & amp; & amp; !$(this).is('.video')) {
                    var linkTitle = $(this).attr('title') ? linkTitle = $(this).attr('title') : '-';
                    var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '-';
                    aeh.trackSimple(topicCat, 'Click', 'Image Overlay Link ' + linkTitle + ' #' + topicId + ' Level ' + level);
                }
            })

            $(document).on('click', '#topics .ctopic .topic a.video', function() {
                var scr = $(this).data('src') ? $(this).data('src') : '-';
                var topicId = $(this).closest('.ctopic').attr('id') ? '#' + $(this).closest('.ctopic').attr('id') : '-';

                if ($(this).closest('#service-detail').length & gt; 0) {
                    var serviceId = $(this).closest('#service-detail').data('id') ? $(this).closest('#service-detail').data('id') : '-';
                    topicId = ' #product-service' + serviceId;
                }
                aeh.trackSimple(topicCat, 'Play', 'Topic Video https://www.youtube.com/watch?v=' + scr + ' ' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .ga-contactbox a.ga-tel', function() {
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '-';
                aeh.trackSimple(topicCat, 'Click', 'Expert Phone' + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .ga-contactbox a.ga-mail', function() {
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '-';
                aeh.trackSimple(topicCat, 'Click', 'Expert Mail' + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .productlist a.stretched-link', function(e, triggered) {
                if (typeof triggered == 'undefined' || !triggered) {
                    var label = $(e.target).closest('.ga-productItem').parent().attr('data-key') ? $(e.target).closest('.ga-productItem').parent().attr('data-key') : '-';
                    var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '-';
                    var partnumber = $('a.stretched-link').closest('.tileitem').find('.price').data('partnumber') ? $('a.stretched-link').closest('.tileitem').find('.price').data('partnumber') : '-';

                    if (isGuest) {
                        partnumber = $(e.target).closest('.tileitem').find('.show-btn').attr('ga-partnumber') ? $(e.target).closest('.tileitem').find('.show-btn').attr('ga-partnumber') : '-';
                        aeh.trackSimple(topicCat, 'Click', 'Product Item Guest Product ID ' + partnumber + ' #' + topicId + ' Level ' + level);
                    } else {
                        aeh.trackSimple(topicCat, 'Click', 'Product Item Product ID ' + partnumber + ' #' + topicId + ' Level ' + level);
                    }
                }
            });

            $(document).on('click', '#topics .productlist .guest a.ga-loginLink', function(e, triggered) {
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '';
                var partnumber = $('a.stretched-link').closest('.tileitem').find('.show-btn').attr('ga-partnumber') ? $('a.stretched-link').closest('.tileitem').find('.show-btn').attr('ga-partnumber') : ' - ';
                aeh.trackSimple(topicCat, 'Click', 'Login Message Product Item Product ID ' + partnumber + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .ctopic a.btn', function(e, triggered) {
                var text = $(this).text();
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '';
                var ctaButton = $(this).is('.btn-primary-button') ? 'CTA Primary Button' : 'CTA Secondary Button';
                aeh.trackSimple(topicCat, 'Click', ctaButton + ' ' + text + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .ctopic a.a-call-to-action:not(.ga-tel):not(.ga-mail)', function(e, triggered) {
                var text = $(this).text();
                var topicId = $(this).closest('.ctopic').attr('id') ? $(this).closest('.ctopic').attr('id') : '';
                aeh.trackSimple(topicCat, 'Click', 'CTA Link ' + text + ' #' + topicId + ' Level ' + level);
            });

            $(document).on('click', '#topics .productlist button.memo', function(e, triggered) {
                if (typeof triggered == 'undefined' || !triggered) {
                    var label = $(e.target).closest('.ga-productItem').parent().attr('data-key') ? $(e.target).closest('.ga-productItem').parent().attr('data-key') : '';
                    aeh.trackSimple('Notice Lists', 'Add', 'Item Group ID ' + label);
                }
            });
        }


        /** PRODUCT SERVICE CARDS **/

        if ($('section#services').length & gt; 0) {
            var $services = $('section#services');
            var serviceCat = 'Services';

            if ($('#service-detail').length & gt; 0) {
                serviceCat = 'Product Service Detail';
            }

            aeh.scrollToSection($services, 'services', 'Services');

            $(document).on('click', 'section#services a.all', function() {
                var text = $(this).text();
                aeh.trackSimple(serviceCat, 'Click', text + ' Level ' + level);
            });

            $(document).on('click', 'section#services .card &gt; a', function() {
                var id = $(this).data('id');
                var pos = $(this).closest('.ga-serviceTeaserPos').length & gt;
                0 ? parseInt($(this).closest('.ga-serviceTeaserPos').index() + 1) : '-';
                aeh.trackSimple(serviceCat, 'Click', 'Product Service Card #product-service' + id + ' Position ' + pos + ' Level ' + level);
            });

            $(document).on('click', 'section#services .btn-show-all', function() {
                var text = $(this).text();
                aeh.trackSimple(serviceCat, 'Click', text + ' Level ' + level);
            });
        }


        /** SERVICE DETAILS **/

        if ($('#service-detail').length & gt; 0) {
            var $serviceDetail = $('#service-detail');
            var productServiceId = $('#service-detail').data('id');

            $($serviceDetail).on('click', '.ga-detailsContactBtn', function() {
                var text = $(this).text();
                aeh.trackSimple('Product Service Detail', 'Click', 'Service Process ' + text + ' #product-service' + productServiceId + ' Level ' + level);
            });

            $($serviceDetail).on('click', '.ga-readMore', function() {
                var text = $(this).text();
                aeh.trackSimple('Product Service Detail', 'Click', 'Service Process ' + text + ' #product-service' + productServiceId + ' Level ' + level);
            });

            $($serviceDetail).on('click', '#detailscontact .btn-create-acc', function() {
                aeh.trackSimple('Product Service Detail', 'Click', 'Service Process Login Message #product-service' + productServiceId + ' Level ' + level);
            });

            $($serviceDetail).on('click', '#detailscontact .btn-guest-request', function() {
                var title = $(this).data('gaTitle');
                aeh.trackSimple('Product Service Detail', 'Click', 'Service Process Login Message ' + title + ' #product-service' + productServiceId + ' Level ' + level);
            });

            $($serviceDetail).on('click', '.ga-service-details a.video', function() {
                var scr = $(this).data('src') ? $(this).data('src') : '-';
                var serviceId = $(this).closest('#service-detail').data('id') ? $(this).closest('#service-detail').data('id') : '-';
                aeh.trackSimple('Product Service Detail', 'Play', 'Teaser Video https://www.youtube.com/watch?v=' + scr + ' #product-service' + serviceId + ' Level ' + level);
            });
        }


        /** SERVICE DETAILS FORM **/

        if ($('#detailscontact').length & gt; 0) {
            var $detailsContact = $('#detailscontact');

            $($detailsContact).on('change', '#contactform-body', function() {
                var title = $(this).attr('placeholder') ? $(this).attr('placeholder') : '';
                aeh.trackSimple('Product Service Forms', 'Fill', 'First Form Field ' + title);
            });

            $($detailsContact).on('change', '#contactform-callback, .field-contactform-callback &gt; label', function() {
                var val = $(this).closest('.field-contactform-callback').find('input:checked').val();
                var callback;
                if (parseInt(val) == 1) {
                    callback = 'On'
                } else {
                    callback = 'Off'
                }
                aeh.trackSimple('Product Service Forms', 'Click', 'Callback ' + callback);
            });

            $($detailsContact).on('click', 'button[type=submit]', function() {
                var text = $(this).text();
                aeh.trackSimple('Product Service Forms', 'Click', text);
            });

            $(document).on('click', '#detailscontact .success-box-row .btn-refresh', function() {
                var text = $(this).text();
                aeh.trackSimple('Product Service Forms', 'Click', text);
            });
        }


        /** NEW OVERLAY **/

        if ($('.ga-newOverlay').length & gt; 0) {
            var $overlay = $('.ga-newOverlay');
            var newOverlayTitle = $overlay.data('title') ? $overlay.data('title') : '';
            aeh.trackSimple('New Overlay', 'See', newOverlayTitle);

            $($overlay).on('click', '.btn-clear', function() {
                var text = $(this).text();
                aeh.trackSimple('New Overlay', 'Click', 'CTA Primary Reverse Button ' + text);
            });

            $($overlay).on('click', '.btn-ok', function() {
                var text = $(this).text();
                aeh.trackSimple('New Overlay', 'Click', 'CTA Primary Button ' + text);
            });
        }


        /** MY ACCOUNT / SUPER USER **/

        if ($('.ga-myAccount').length & gt; 0) {
            var $myAccount = $('.ga-myAccount');

            $($myAccount).on('click', '#my-account-users .ga-addUser', function() {
                aeh.trackSimple('User Management', 'Click', 'Add New User');
            });

            $($myAccount).on('change', '#my-account-users .ga-userSearch', function() {
                aeh.trackSimple('User Management', 'Fill', 'User Search');
            });

            $($myAccount).on('click', '#my-account-users .ga-negativeBalanceSwitch input', function() {
                aeh.trackSimple('User Management', 'Click', 'Filter Usage Negative Balances');
            });

            $($myAccount).on('click', '#my-account-users .ga-settingsUser', function() {
                aeh.trackSimple('User Management Tool', 'Click', 'Edit');
            });

            $($myAccount).on('click', '#my-account-users .ga-userOrders', function() {
                aeh.trackSimple('User Management Tool', 'Click', 'User Orders');
            });

            $($myAccount).on('click', '#my-account-users .ga-orderHistoryUser', function() {
                aeh.trackSimple('User Management Tool', 'Click', 'Orders');
            });

            $($myAccount).on('click', '#my-account-users .ga-deleteUser', function() {
                aeh.trackSimple('User Management Tool', 'Click', 'Delete');
            });
        }


        /** SERVICES OVERVIEW **/

        if ($('#services-overview').length & gt; 0) {
            var $servicesOverview = $('#services-overview');

            $servicesOverview.on('click', '.ga-serviceOverviewCard', function() {
                var title = $(this).find('.ga-cardHeadline').text();
                var pos = $(this).closest('.col-xs-12').index() + 1;
                aeh.trackSimple('Services', 'Click', 'Page Teaser ' + title + ' Position ' + pos + ' Level Service Overview');
            });
        }


        /** BREADCRUMBS **/

        if ($('.breadcrumbs').length & gt; 0) {
            var $breadcrumbs = $('.breadcrumbs');

            $breadcrumbs.on('click', 'a', function() {
                var title = $(this).text();
                if ($(this).is('.dropdown-item')) {
                    title = 'Dropdown ' + title.replace(/ *\([^)]*\) */g, '').trim();
                }
                if ($(this).parent('.ga-breadcrumbsCampaignsOverview')) {
                    level = 'Campaign Overview';
                }
                aeh.trackSimple('Breadcrumbs', 'Click', 'Breadcrumb ' + title + ' Level ' + level);
            });
        }


        /** ASSORTMENT **/

        if ($('#assortment').length & gt; 0) {
            var $assortment = $('#assortment');

            aeh.scrollToSection($assortment, 'assortment', 'Assortment'); //TODO check if we need this since it's always visible and therefore always will be triggered without scrolling

            $assortment.on('click', '.category-box a', function() {
                var title = $(this).text();
                if ($(this).is('.dropdown-item')) {
                    title = ' Dropdown ' + title.replace(/ *\([^)]*\) */g, '').trim();
                } else {
                    title = ' Box ' + title.replace(/ *\([^)]*\) */g, '').trim();
                }
                aeh.trackSimple('Category Navigation', 'Click', 'Category ' + title + ' Level ' + level);
            });
        }


        /** TOP BRANDS **/

        $(document).on('click', '#recommendations .top-brands .ga-topBrandLink', function() {
            var brand = $(this).data('gaTitle');
            var pos;

            if (brand) {
                if ($(this).closest('#recommendations')) {
                    aeh.trackSimple('Recommendations', 'Click', 'Top Brand ' + brand + ' Level ' + level);
                }
            }
        });

        $(document).on('click', '#recommendations .top-brands .ga-showAllBrands', function() {
            aeh.trackSimple('Recommendations', 'Click', $(this).data('title') + ' Level ' + level);
        });


        /** PERFORMANCE COMMITMENTS **/

        if ($('#performance-commitments').length & gt; 0) {
            var $performanceCommitments = $('#performance-commitments');
            var performanceCommitmentsId = $performanceCommitments.data('id') ? $performanceCommitments.data('id') : '-';

            aeh.scrollToSection($performanceCommitments, 'performance-commitments', 'Performance Commitments');

            $performanceCommitments.on('click', '.performance-commitments-nav &gt; a', function() {
                var title = $(this).text();
                aeh.trackSimple('Performance Commitments', 'Click', 'USP-Group ' + title + ' #leistungsversprechen' + performanceCommitmentsId + ' Level ' + level);
            });
        }

        /** DOWNLOADS / BOOKSHELF SECTION**/

        if ($('section#bookshelf').length & gt; 0) {
            var $downloads = $('section#bookshelf');
            aeh.scrollToSection($downloads, 'bookshelf', 'Downloads');
        }


        /** FOOTER **/

        $('footer .btn-nl-signup').on('click', function() {
            aeh.trackSimple('Footer', 'Send', 'Newsletter Signup Email Address');
        });

        if ($('footer .footer').length & gt; 0) {
            var $footer = $('footer');

            $footer.on('click', '.ga-wholeAssortment', function() {
                aeh.trackSimple('Footer', 'Click', $(this).text());
            });

            $footer.on('click', '.ga-allBrands', function() {
                aeh.trackSimple('Footer', 'Click', $(this).text());
            });

            $footer.on('click', '#footer-products &gt; li &gt; a', function() {
                aeh.trackSimple('Footer', 'Click', $(this).closest('#footer-products').prev('.h3').text() + ' Link ' + $(this).text());
            });

            $footer.on('click', '.footer-links-actions .a-call-to-action', function() {
                aeh.trackSimple('Footer', 'Click', 'CTA ' + $(this).text());
            });

            $footer.on('click', '.social &gt; a', function() {
                aeh.trackSimple('Footer', 'Click', 'Social Media ' + $(this).data('title'));
            });

            $footer.on('click', '#select-footer &gt; a', function() {
                aeh.trackSimple('Footer', 'Click', 'Contact ' + $(this).text());
            });

            $footer.on('click', '.ga-footerMail', function() {
                var location = $('#select-footer').length ? $('#select-footer').find('a.active').text() : '-';
                aeh.trackSimple('Footer', 'Click', 'Send Email ' + location);
            });

            $footer.on('click', '.footer-links-copy a', function() {
                aeh.trackSimple('Footer', 'Click', 'Link ' + $(this).text());
            });
        }


        /** PRODUCT DETAIL **/

        if ($('.product #product').length & gt; 0) {
            if ($('.sticky-navbar').length) { // general sticky nav tracking doesn't work on PDP
                $(document).on('click', '.sticky-navbar .nav-link', function() {
                    aeh.trackSimple('Anchor Navigation', 'Click', $(this).text() + ' Level ' + level);
                });
            }

            $(document).on('click', '#product #manufacturer-logo a', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Manufacturer Logo Brand ' + $(this).closest('#product').data('gaBrand') + ' Level ' + level);
            });

            $(document).on('click', '#product .manu-category .ga-manulink', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Manufacturer Link Brand ' + $(this).closest('#product').data('gaBrand') + ' Level ' + level);
            });

            $(document).on('click', '#product .manu-category .ga-catlink', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Category Link ' + $(this).text() + ' Level ' + level);
            });

            $(document).on('click', '#product #items-toggle', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Items Toggle ' + $(this).attr('title') + ' Level ' + level);
            });

            $(document).on('click', '#product .action-buttons .ga-recommend', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Action Button ' + $(this).data('gaTitle') + ' Level ' + level);
            });

            $(document).on('click', '#product .action-buttons .ga-print', function() {
                aeh.trackSimple('Product Detail', 'Click', 'Action Button ' + $(this).data('gaTitle') + ' Level ' + level);
            });
        }


        /** FRONTPAGE AT **/

        if ($('.frontpage-ccp').length & gt; 0) {
            var $frontpage = $('.frontpage-ccp');

            $frontpage.on('click', '.teaserbox-stage &gt; a', function() {
                var pos = $(this).closest('.swiper-slide').index() + 1;
                aeh.trackSimple('Homepage', 'Click', 'Stage Carousel #stageCarousel' + $(this).closest('.teaserbox-stage').data('id') + ' Position ' + pos + ' Level ' + level);
            });

            $frontpage.on('click', '#top-brands .ga-topBrandLink', function() {
                var pos = $(this).closest('.top-brand').index() + 1;
                aeh.trackSimple('Homepage', 'Click', 'Top Brands ' + $(this).data('gaTitle') + ' Position ' + pos + ' Level ' + level);
            });

            $(document).on('click', '.front-teaser .card:not(.quickaccess)', function() {
                var cardType = '';
                if ($(this).is('[data-id]')) {
                    cardType = ' #frontTeaser' + $(this).data('id');
                } else if ($(this).closest('.news-card').length) {
                    cardType = ' #t3News ' + $(this).find('.ga-cardHeadline').text();
                }
                var pos = $(this).closest('.col-xs-12').index() + 1;
                aeh.trackSimple('Homepage', 'Click', 'Front Teaser' + cardType + ' Position ' + pos + ' Level ' + level);
            });

            $frontpage.on('click', '.recently-viewed .ga-rv-slide', function() {
                var pos = $(this).index() + 1;
                aeh.trackSimple('Recently Viewed Items', 'Click', 'Product Item Group ID ' + $(this).data('key') + ' Position ' + pos + ' Level ' + level);
            });

            if ($('#news').length & gt; 0) {
                var $news = $('#news');
                aeh.scrollToSection($news, 'news', 'Homepage');
            }

            $(document).on('click', '#news a', function() {
                if ($(this).is('.ga-allNews')) {
                    aeh.trackSimple('Homepage', 'Click', $(this).text() + ' Level ' + level);
                } else {
                    var newsType = $(this).closest('.img-news').length ? 'Big Card' : 'Teaser';
                    var pos = $(this).closest('.img-news').length ? $(this).closest('.col-lg-6').index() + 1 : $(this).closest('.col-lg-3').index() + 3;
                    aeh.trackSimple('Homepage', 'Click', 'News ' + newsType + ' #t3News ' + $(this).find('.news-list-title').text() + ' Position ' + pos + ' Level ' + level);
                }
            });

            $frontpage.on('click', '.front-teaser .quicklist a', function() {
                var pos = $(this).index() + 1;
                aeh.trackSimple('Homepage', 'Click', 'Quick Access ' + $(this).closest('.quickaccess').find('.h3').text() + ' Product ID ' + $(this).data('partnumber') + ' Position ' + pos + ' Level ' + level);
            });

            if ($('#bookshelfbox').length & gt; 0) {
                var $bookshelfbox = $('#bookshelfbox');
                aeh.scrollToSection($bookshelfbox, 'bookshelfbox', 'Downloads');

                $bookshelfbox.on('click', 'a', function() {
                    var title = $bookshelfbox.find('.ga-title').text();
                    aeh.trackSimple('Downloads', 'Click', $(this).text() + ' #download ' + title + ' Level ' + level);
                });
            }
        }


        /** CMS CONTENT **/

        if ($('.site-ccp').length & gt; 0) {
            var $siteCcp = $('.site-ccp');

            /** Social Shares**/
            $siteCcp.on('click', 'a.share-button, .social-media-wrapper &gt; a', function() {
                var classes = $(this).attr('class').split(' ');
                var service = '';
                var socialMedialabel = '';
                var socialShareCat = 'Social Shares';

                classes.forEach(function(c) {
                    switch (c) {
                        case 'facebook':
                            service = 'Facebook';
                            break;
                        case 'twitter':
                            service = 'Twitter';
                            break;
                        case 'xing':
                            service = 'Xing';
                            break;
                        case 'whatsapp':
                            service = 'Whatsapp';
                            break;
                        case 'linkedIn':
                            service = 'Linkedin';
                            break;
                        case 'instagram':
                            service = 'Instagram';
                            break;
                        case 'mail':
                            service = 'Mail';
                            break;
                        default:
                            break;
                    }
                });

                if ($(this).closest('.news-single').length & gt; 0) {
                    socialShareCat = 'News Detail';
                    socialMedialabel = 'Social Media ';
                } else if ($(this).closest('.simply-informed').length & gt; 0) {
                    socialShareCat = 'Contact Box';
                    socialMedialabel = 'Social Media ';
                }

                aeh.trackSimple(socialShareCat, 'Click', socialMedialabel + service);
            });


            /** Vacancy detail **/
            var $vacancyDetail = $('.vacancy-detail');

            $siteCcp.on('click', 'a.apply-button', function() {
                var applyButtonPos = 'Top';
                if ($(this).closest('.action-buttons').length) {
                    applyButtonPos = 'Bottom';
                }
                aeh.trackSimple('Carreer Detail Views', 'Click', 'Apply to Job Button ' + applyButtonPos);
            });

            $vacancyDetail.on('click', '.action-buttons .print-button', function() {
                aeh.trackSimple('Carreer Detail Views', 'Click', 'Print Job');
            });

            $vacancyDetail.on('click', '.action-buttons .back-button', function() {
                aeh.trackSimple('Carreer Detail Views', 'Click', 'Back to Job Overview');
            });


            /** CMS Highlight Details **/
            var $highlightDetails = $('.site-ccp .product-page');

            $highlightDetails.on('click', 'a', function() {
                var $this = $(this);
                var highlightDetailslinkPos = '';
                var highlightDetailsTitle = $('#page-title').length ? $('#page-title').text() : '-';
                if ($this.closest('p, li').length & gt; 0) {
                    highlightDetailslinkPos = 'Text'
                } else if ($this.find('.fa-shopping-cart').length & gt; 0) {
                    highlightDetailslinkPos = 'Shopping'
                } else if ($this.is('.youtube-preview')) {
                    highlightDetailslinkPos = 'Video'
                }
                aeh.trackSimple('Highlight Detail', 'Click', highlightDetailslinkPos + ' Link ' + $this.text() + '#t3Highlight ' + highlightDetailsTitle + ' Level Highlight Detail');
            });

            /** News Overview **/
            var $newsList = $('.news-list-view');

            if ($newsList.length & gt; 0) {
                $newsList.on('click', '.newsFilters .assortment-filter', function() {
                    aeh.trackSimple('News Overview', 'Click', 'Filter ' + $(this).prev('label').text() + ' Level News Overview');
                });

                $newsList.on('keyup', '.newsFilters #assortment-search', function() {
                    aeh.trackSimple('News Overview', 'Fill', 'Corporate News Search Level News Overview');
                });

                $newsList.on('click', '.article a.more', function() {
                    aeh.trackSimple('News Overview', 'Click', $(this).text() + ' #t3News ' + $(this).closest('.article').find('.news-header a').text() + ' Level News Overview');
                });
            }

            /** News Detail **/
            var $newsDetail = $('.news-single');

            if ($newsDetail.length & gt; 0) {
                var newsTitle = $newsDetail.find('.news-header h2').text();

                $newsDetail.on('click', 'a', function() {
                    var $this = $(this);

                    if ($this.closest('.news-text-wrap p').length & gt; 0) {
                        var newsDetailLinkTitle = $this.attr('title') ? $this.attr('title') : '-';
                        aeh.trackSimple('News Detail', 'Click', 'Text Link ' + newsDetailLinkTitle + ' News ' + newsTitle + ' Level News Detail');
                    }

                    if ($this.is('.youtube-preview')) {
                        aeh.trackSimple('News Detail', 'Play', 'Video https://www.youtube.com/watch?v=' + $this.data('src') + ' News ' + newsTitle + ' Level News Detail');
                    }
                });
            }

            /** Simply informed contact box **/
            var $contactCcp = $('.simply-informed');

            if ($contactCcp.length & gt; 0) {
                $contactCcp.on('click', '.element-1 a, .element-1 .submit', function() {
                    var contactType = $(this).closest('.mail').length & gt;
                    0 ? 'Contact Form' : 'Phone';
                    aeh.trackSimple('Contact Box', 'Click', contactType);
                });
            }

            /** Sales team / Contact persons overview **/
            var $contactsOverview = $('.site-ccp .contacts');

            if ($contactsOverview.length & gt; 0) {
                $contactsOverview.on('click', '.contact-filters .region-filter, .contact-filters .branch-filter', function() {
                    aeh.trackSimple('Contact Person Overview', 'Click', 'Filter ' + $(this).prevAll('label:first').text());
                });

                $contactsOverview.on('keyup', '.contact-filters #contact-search', function() {
                    aeh.trackSimple('Contact Person Overview', 'Fill', 'Contact Person Search');
                });

                $contactsOverview.on('click', '.contact &gt; a', function() {
                    var contactType = 'Mail';
                    if ($(this).is('.no-link')) {
                        contactType = $(this).nextAll('.no-link').length ? 'Phone' : 'Mobile';
                    }
                    aeh.trackSimple('Contact Person Overview', 'Click', contactType);
                });
            }
        }


        /** HIGHLIGHTS **/

        if ($('section#highlights').length & gt; 0) {
            aeh.scrollToSection($('section#highlights'), 'highlights', 'Highlights');
        }

        /** CMS Highlights **/

        $(document).on('click', '.cms-highlights button#show', function() {
            aeh.trackSimple('Highlights', 'Click', $(this).text() + ' Level ' + level);
        });

        $(document).on('click', '.cms-highlights a.des-button', function() {
            var cmsHighlightPos = $(this).closest('.fce-wrapper').index() + 1;
            aeh.trackSimple('Highlights', 'Click', 'Highlight #t3Highlight ' + $(this).text() + ' Position ' + cmsHighlightPos + ' Level ' + level);
        });

        /** COMMON REQUEST **/

        var $commonRequest = $('#form-common-request');

        if ($commonRequest.length & gt; 0) {
            $commonRequest.on('change', '#contactformcommon-body', function() {
                aeh.trackSimple('Contact Form', 'Fill', $(this).prev('.control-label').text());
            });

            $commonRequest.on('click', 'button[type=submit]', function() {
                aeh.trackSimple('Contact Form', 'Send', 'Contact Form');
            });
        }


        /** Image Overlay **/

        $(document).on('mouseover click', '.img-overlay-wrapper .img-overlay-link', function(e) {
            var imageOverlayAction;
            if (e.type === 'mouseover') {
                imageOverlayAction = 'Mouseover';
            } else {
                imageOverlayAction = 'Click';
            }
            var imgOverlayLinkTitle = $(this).find('a &gt; .bold').text();
            var imgOverlayLinkHighlight = $(this).closest('.fce-wrapper').find('.csc-header').text();
            aeh.trackSimple('Highlights', imageOverlayAction, 'Image Overlay Link ' + imgOverlayLinkTitle + ' #t3Highlight ' + imgOverlayLinkHighlight + ' Level ' + level);
        });


        /** SUSTAINABILITY WEEK **/

        /** Sustainability Week Flap **/
        var $sustainabilityflap = $('#sustainabilityflap');

        if ($sustainabilityflap.length & gt; 0) {
            $sustainabilityflap.on('click', '.intro &gt; p &gt; a', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Flap Link ' + $(this).text());
            });
            $sustainabilityflap.on('click', '.inner-box &gt; a.btn', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Flap Button ' + $(this).text());
            });
            $sustainabilityflap.on('click', '.inner-box input.btn', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Flap Button ' + $(this).val());
            });
        }

        if ($('#sustainability').length & gt; 0) {
            $('#sustainability').on('mouseover', function() {
                aeh.trackSimple('Sustainability Week', 'Mouseover', 'Leave');
            });
            $('#sustainability .tooltip-inner a.a-call-to-action').on('click', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Tooltip Link ' + $(this).text());
            });
        }

        /** Sustainability Week order confirmation **/
        var $orderConfirmationSustainability = $('#order-confirmation-sustainability');

        if ($orderConfirmationSustainability.length & gt; 0) {
            $orderConfirmationSustainability.on('click', 'p &gt; a', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Order Confirmation Teaser Link ' + $(this).text());
            });
            $orderConfirmationSustainability.on('click', 'a.btn', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Order Confirmation Teaser Button ' + $(this).text());
            });
            $orderConfirmationSustainability.on('click', 'form input.btn', function() {
                aeh.trackSimple('Sustainability Week', 'Click', 'Order Confirmation Teaser Button ' + $(this).val());
            });
        }

        /** SEARCHRESULTS **/

        if ($('.ga-searchNav').length & gt; 0) {
            $searchTerm = $('#search').val();

            $('.ga-searchNav &gt; a').on('click', function() {
                aeh.trackSimple('Search Results', 'Click', 'Search Category Filter ' + $(this).data('gaTitle') + ' Level Search Result');
            });

            /** Products **/
            $(document).on('click', '.products-searched #categoryfilter a:not(.selected)', function() {
                var $clone = $(this).clone();
                $clone.find('span').remove();
                var title = $clone.text();
                aeh.trackSimple('Search Results', 'Click', 'Product Category Filter ' + title + ' Level Search Result Products');
            });

            $(document).on('click', '.products-searched #featurefilter .sfilter .apply-btn', function() {
                var title = $(this).closest('.sfilter').find('select').data('gaLabel');
                aeh.trackSimple('Search Results', 'Click', 'Feature Filter ' + title + ' Level Search Result Products');
            });

            $(document).on('click', '.products-searched .productlist .ga-pagination li', function() {
                aeh.trackSimple('Search Results', 'Click', 'Pagination Search String ' + $searchTerm + ' Level Search Result Products');
            });

            $(document).on('click', '.products-searched .ga-content-hint', function() {
                aeh.trackSimple('Search Results', 'Click', 'Content Teaser Search String ' + $searchTerm + ' Level Search Result Products');
            });

            $(document).on('click', '.products-searched .ga-summary .view-switch', function() {
                var showType = $(this).is('.ga-show-list') ? 'List' : 'Tile';
                aeh.trackSimple('Search Results', 'Click', showType + ' View Search String ' + $searchTerm + ' Level Search Result Products');
            });

            $(document).on('click', '.products-searched .ga-productItem', function() {
                var $itemParent = $(this).closest('.col-xs-12');
                var $itemPos = $itemParent.prev().is('.content-hint-wrap') ? $itemParent.index() : ($itemParent.index() + 1);
                aeh.trackSimple('Search Results', 'Click', 'Item Group ID ' + $itemParent.data('key') + ' Position ' + $itemPos + ' Level Search Result Products');
            });


            /** Contents **/
            $('#contents .searchresult-filter .switch-wrap label').click(function() {
                var $switch = $(this).closest('.switch-wrap');
                aeh.trackSimple('Search Results', 'Click', $switch.find('label').text().trim() + ' ' + ($switch.find('button').is('.on') ? 'Off' : 'On') + ' Level Search Result Contents');
            });

            $(document).on('click', '#contents .searchresult-filter .select2', function() {
                var $select = $(this).closest('.sfilter').find('select');
                aeh.trackSimple('Search Results', 'Click', 'Filter ' + $select.data('gaLabel') + ' Level Search Result Contents');
            });

            $(document).on('click', '#contents .results-entry a', function() {
                var $this = $(this);
                var $cResultEntry = $this.closest('.results-entry');
                var cPos = $cResultEntry.index() + 1;
                var cUrl = $this.attr('href');
                var cIndex = cUrl.indexOf("#");
                var cItem;
                if (cIndex !== -1) {
                    cItem = cUrl.substring(cIndex);
                } else {
                    var cLabel = ($cResultEntry.find('.label').text() !== '') ? $cResultEntry.find('.label').text() : '-';
                    var cTitle = ($cResultEntry.find('.results-topic a').text() !== '') ? $cResultEntry.find('.results-topic a').text() : '-';
                    cItem = '#t3' + cLabel + ' ' + cTitle.trim();
                }
                aeh.trackSimple('Search Results', 'Click', 'Search Result Item ' + cItem + ' Position ' + cPos + ' Level Search Result Contents');
            });

            $(document).on('click', '#contents .ga-pagination li a', function() {
                aeh.trackSimple('Search Results', 'Click', 'Pagination Search String ' + $searchTerm + ' Level Search Result Contents');
            });

            /** Downloads **/
            $(document).on('click', '#downloads .searchresult-filter &gt; span', function() {
                aeh.trackSimple('Search Results', 'Click', 'Filter ' + $(this).find('select').attr('placeholder') + ' Level Search Result Media');
            });

            $(document).on('click', '#downloads .results-entry a', function() {
                var $this = $(this);
                var $downloadResultEntry = $this.closest('.results-entry');
                var downloadType = $this.is('.download') ? 'File Format ' + $(this).text() : $(this).text();
                var downloadId = $downloadResultEntry.data('id') ? ' download#' + $downloadResultEntry.data('id') : '-';
                var downloadPos = $downloadResultEntry.index() + 1;
                aeh.trackSimple('Search Results', 'Click', 'Search Result Item ' + downloadType + ' ' + downloadId + ' Position ' + downloadPos + ' Level Search Result Media');
            });
        }


        /** CAMPAIGNS **/

        if ($('.campaigns-overview').length & gt; 0) {
            var $campaignsOverview = $('.campaigns-overview');

            $($campaignsOverview).on('click', '.card &gt; a', function() {
                var $campaignColumn = $(this).closest('.card-column');
                var campaignPos = $campaignColumn.index() + 1;
                var campaignHeadline = $(this).closest('.card').find('.ga-cardHeadline').text();
                aeh.trackSimple('Campaigns', 'Click', 'Page Teaser ' + campaignHeadline + ' Position ' + campaignPos + ' Level Campaign Overview');
            });
        }


        /** Popup **/
        var $popup = $('.popup');

        if ($popup.length & gt; 0) {
            $popup.on('click', '.modal-actions a', function() {
                var $this = $(this);
                var ctaText = $this.text();
                var popupId = $this.closest('.popup').attr('data-id');
                var ctaType = '';
                if ($this.is('.ga-primaryButton')) {
                    ctaType = 'Primary Button'
                } else if ($this.is('.ga-secondaryButton')) {
                    ctaType = 'Secondary Button'
                }
                aeh.trackSimple('Popups', 'Click', 'CTA ' + ctaType + ' ' + ctaText + ' #popup' + popupId);
            })
            $popup.on('click', 'button.close', function() {
                aeh.trackSimple('Popups', 'Click', 'Close X');
            })
        }

        /** No results **/
        var $unassignedItem = $('.unassigned-item');

        if ($unassignedItem.length & gt; 0) {
            $unassignedItem.on('click', '.btn-flap', function() {
                aeh.trackSimple('b-p-items', 'Click', $(this).text());
            });
        }


        /** Guided product filter **/
        var $guidedProductFilter = $('#guided-product-filter');

        if ($guidedProductFilter.length & gt; 0) {
            $guidedProductFilter.on('click', '.card', function(e) {
                var title = $(e.target).closest('.link').length ? ' Selector Card Infobox' : ' Selector Card';
                aeh.trackSimple('Guided product filter', 'Click', 'Productfilter #' + ($guidedProductFilter.data('id') ? $guidedProductFilter.data('id') : '-') + title);
            });

            $guidedProductFilter.on('click', '.ga-results', function() {
                var title = $(this).clone().children().remove().end().text();
                aeh.trackSimple('Guided product filter', 'Click', 'Productfilter #' + ($guidedProductFilter.data('id') ? $guidedProductFilter.data('id') : '-') + ' Button ' + title);
            });

            $guidedProductFilter.on('click', '.ga-next', function() {
                aeh.trackSimple('Guided product filter', 'Click', 'Productfilter #' + ($guidedProductFilter.data('id') ? $guidedProductFilter.data('id') : '-') + ' Button ' + $(this).text());
            });

            $guidedProductFilter.on('click', '.ga-prev', function() {
                aeh.trackSimple('Guided product filter', 'Click', 'Productfilter #' + ($guidedProductFilter.data('id') ? $guidedProductFilter.data('id') : '-') + ' Button back');
            });

            $guidedProductFilter.on('click', '.expert', function(e) {
                aeh.trackSimple('Guided product filter', 'Click', 'Productfilter #' + ($guidedProductFilter.data('id') ? $guidedProductFilter.data('id') : '-') + ' Selector Card Expert Tip');
            });
        }

        if ($('.category-box.guided-product-filter-teaser').length) {
            var $teaser = $('.category-box.guided-product-filter-teaser');
            aeh.trackSimple('Guided product filter', 'See', 'Category Page Productfilter #' + ($teaser.data('id') ? $teaser.data('id') : '-') + ' Level ' + ($('#level').data('level') ? $('#level').data('level') : '-'));

            $teaser.on('click', function() {
                aeh.trackSimple('Guided product filter', 'Click', 'Category Page Productfilter #' + ($teaser.data('id') ? $teaser.data('id') : '-') + ' Level ' + ($('#level').data('level') ? $('#level').data('level') : '-'));
            });
        }

        if ($('.guided-product-filter-banner').length) {
            var $banner = $('.guided-product-filter-banner');
            aeh.trackSimple('Guided product filter', 'See', 'Product List Productfilter #' + ($banner.data('id') ? $banner.data('id') : '-') + ' Level ' + ($('#level').data('level') ? $('#level').data('level') : '-'));

            $banner.on('click', function() {
                aeh.trackSimple('Guided product filter', 'Click', 'Product List Productfilter #' + ($banner.data('id') ? $banner.data('id') : '-') + ' Level ' + ($('#level').data('level') ? $('#level').data('level') : '-'));
            });
        }
    };

    jQuery(function($) {
        if (document.readyState === "complete") {
            loadGAEvents($);
        } else {
            jQuery(window).on('load', function() {
                loadGAEvents($);
            });
        }
    });
})(analyticsEventHandler); < /pre></body > < /html>