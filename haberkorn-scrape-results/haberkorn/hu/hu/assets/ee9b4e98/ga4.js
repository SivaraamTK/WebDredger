< html > < head > < meta name = "color-scheme"
content = "light dark" > < /head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">var GA_OPTED_OUT = document.cookie.indexOf('ga-disable=1') &gt; -1;
if (!GA_OPTED_OUT & amp; & amp; typeof OnetrustActiveGroups !== "undefined" & amp; & amp; OnetrustActiveGroups.indexOf("C0002") === -1) {
    window.GA_OPTED_OUT = true;
}
(function() {
    var gaInitRetry = 0;

    function ga_convertSearchString(s) {
        return s.toString().toLowerCase().replace(/(%23)+$/, ''); // lower-case search strings for comparison reasons
    }

    function initGa() {
        if (typeof window.dataLayer === 'undefined') {
            gaInitRetry++;
            if (gaInitRetry & lt; 20) {
                setTimeout(initGa, 100 * gaInitRetry);
            }
            return;
        }

        gtag('js', new Date());

        var ga4Config = {
            'anonymize_ip': true,
            'cookie_flags': 'Secure;SameSite=None',
            'cookie_path': des.cookiePath,
            'site_speed_sample_rate': 100
        };

        var i, l, sr, sm, sv, sp;

        var searchParam = "s";
        var searchParamAlt = "q"; //If pageview shouldn't be considered in Site-Search tracking
        var searchParamExists = new RegExp("[\?|&amp;]" + searchParam + "=").test(document.location.search);
        var onSearchSite = !!(searchParamExists & amp; & amp;
            ($('.ga-summary').length || $('[data-ga-search-category]').length || $('meta[name=gaSingleSearchResult]').length));

        var p = document.location.pathname,
            s = document.location.search;

        //Replace privacy-critical parameters
        var privacyParams = 'activationKey|e|email|mc_eid|password|u|username';
        var privacyReplacements = {
            'activationKey': 'ACTIVATIONKEY',
            'e': 'EMAIL',
            'email': 'EMAIL',
            'mc_eid': 'UNIQID',
            'password': 'PASSWORD',
            'u': 'UNIQID',
            'username': 'USERNAME'
        };
        sr = new RegExp('([?|&amp;])(' + privacyParams + ')=[^&amp;]+', 'gi');
        if (sr.test(s)) {
            s = s.replace(sr, function(match, p1, p2) {
                return p1 + p2 + '=' + privacyReplacements[p2];
            });
        }
        var rsp = document.referrer.lastIndexOf('?');
        if (document.referrer.length & gt; 0 & amp; & amp; rsp !== -1) {
            var rs = document.referrer.substring(rsp);
            if (sr.test(rs)) {
                rs = rs.replace(sr, function(match, p1, p2) {
                    return p1 + p2 + '=' + privacyReplacements[p2];
                });
            }
            if (rs !== document.referrer.substring(rsp)) {
                ga4Config['page_referrer'] = document.referrer.substring(0, rsp) + rs;
            }
        }

        if (onSearchSite) {
            sr = new RegExp(searchParam + "\=([^&amp;]+)");
            sm = s.match(sr);
            if (sm != null) { // search parameter available (and not empty)
                sv = ga_convertSearchString(sm[1]);
                sp = "";
                if ($('[data-ga-search-category]').length) {
                    sp = searchParam + "=" + sv + "&amp;cat=" + $('[data-ga-search-category]').data('ga-search-category');
                } else {
                    var resultRange = "";

                    if ($('meta[name=gaSingleSearchResult]').length) {
                        resultRange = "1";
                    } else {
                        var resultRanges = [
                            [1],
                            [2, 5],
                            [6, 10],
                            [11, 20],
                            [21, 50],
                            [51, 100],
                            [101, 200],
                            [201, 500]
                        ];
                        var resultCount = parseInt($('.ga-summary').eq(0).attr('data-totalcount'));

                        if (resultCount & gt; resultRanges[resultRanges.length - 1][1]) {
                            resultRange = "%3E" + resultRanges[resultRanges.length - 1][1];
                        } else if (resultCount == resultRanges[0][0]) {
                            resultRange = resultRanges[0][0];
                        } else {
                            for (i = 1, l = resultRanges.length; i & lt; l; i++) {
                                if (resultRanges[i][0] & lt; = resultCount == resultCount & lt; = resultRanges[i][1]) {
                                    resultRange = resultRanges[i][0] + "-" + resultRanges[i][1];
                                }
                            }
                        }
                    }

                    sp = searchParam + "=" + sv + "&amp;cat=" + resultRange;
                }
                s = sr.test(s) ? s.replace(sr, sp) : s + (s.indexOf('?') & gt; - 1 ? '&amp;' : '?') + sp;
            }
        }

        if (p !== document.location.pathname || s !== document.location.search) {
            // Variable ga_location is used by Google Tag Manager
            window.ga_location = document.location.href.replace(document.location.pathname + document.location.search + document.location.hash, p + s);
            ga4Config['page_location'] = window.ga_location;
        }

        var customDimensions = {};

        if (isGuest) {
            customDimensions['dimension_1'] = 'Not logged in';
            ga4Config['login_status'] = '&lt;logged_out&gt;';
        } else {
            customDimensions['dimension_1'] = 'Logged in';
            ga4Config['login_status'] = '&lt;logged_in&gt;';
        }

        if (typeof ga_currencyCode == 'string' & amp; & amp; ga_currencyCode !== '') {
            customDimensions['currency_code'] = ga_currencyCode;
        }

        var userProperties = {};

        if (typeof ga_targetGroup == 'string') {
            userProperties['dimension_2'] = ga_targetGroup;
            ga4Config['user_target_group'] = ga_targetGroup;
        } else {
            ga4Config['user_target_group'] = '';
        }

        if (typeof ga_userType == 'string') {
            userProperties['dimension_3'] = ga_userType;
            ga4Config['user_group'] = ga_userType;
        } else {
            ga4Config['user_group'] = '';
        }

        if (typeof ga_userLanguage == 'string') {
            userProperties['dimension_5'] = ga_userLanguage;
            ga4Config['user_language'] = ga_userLanguage;
        } else {
            ga4Config['user_language'] = '';
        }

        if (typeof ga_customerSector == 'string' & amp; & amp; ga_customerSector !== '') {
            userProperties['dimension_10'] = ga_customerSector;
            ga4Config['user_branch'] = ga_customerSector;
        } else {
            ga4Config['user_branch'] = '';
        }

        if (typeof ga_userFunction == 'string' & amp; & amp; ga_userFunction !== '') {
            userProperties['dimension_13'] = ga_userFunction;
            ga4Config['user_funktion'] = ga_userFunction;
        } else {
            ga4Config['user_funktion'] = '';
        }

        if (typeof ga_userInterests == 'string' & amp; & amp; ga_userInterests !== '') {
            userProperties['dimension_14'] = ga_userInterests;
            userProperties['Interests'] = ga_userInterests;
            ga4Config['user_interests'] = ga_userInterests;
        } else {
            ga4Config['user_interests'] = '';
        }

        if (typeof ga_userRegistrationdate == 'string' & amp; & amp; ga_userRegistrationdate !== '') {
            userProperties['dimension_17'] = ga_userRegistrationdate;
            ga4Config['user_registrationdate'] = ga_userRegistrationdate;
        } else {
            ga4Config['user_registrationdate'] = '';
        }

        if (typeof ga_countryId == 'string' & amp; & amp; ga_countryId !== '') {
            ga4Config['country_id'] = ga_countryId;
        } else {
            ga4Config['country_id'] = '';
        }

        gtag('config', ga_propertyId, ga4Config);

        if (onSearchSite) { // Track view_search_results
            // Don't move before ga4Config and gtag is configured
            gtag('event', 'view_search_results', {
                'search_term': (typeof sm == 'object' & amp; & amp; sm.hasOwnProperty((1))) ? sm[1] : '',
                'cat': $('[data-ga-search-category]').length ? $('[data-ga-search-category]').data('ga-search-category') : resultRange
            });
        }

        gtag('event', 'customer_user_data', customDimensions);

        gtag('set', 'user_properties', userProperties);

        /* Product Details View */
        if (!onSearchSite & amp; & amp; $('#product').length) {
            var $product = $('#product');

            gtag('event', 'view_item', {
                'items': [{
                    'item_id': $product.parent().attr('data-key'),
                    'item_name': $.trim($product.find('.ga-productName').eq(0).text()),
                    'item_category': $product.data('ga-category'),
                    'item_brand': $product.data('ga-brand')
                }]
            });
        }

        gtag('get', ga_propertyId, 'client_id', function(clientId) {
            setCookie('hk_cid', clientId, true, 'C0002', true);
            //For user tracking
            setCookie('ht', 1, true, 'C0002', true);
        });
    }

    function initGTM() {
        if (typeof gtm_config === 'object' & amp; & amp; gtm_config instanceof Array & amp; & amp; gtm_config.length & gt; 0) {
            for (var k = 0, le = gtm_config.length; k & lt; le; k++) {
                if (gtm_config[k].container) {
                    (function(w, d, s, l, i) {
                        w[l] = w[l] || [];
                        w[l].push({
                            'gtm.start': new Date().getTime(),
                            event: 'gtm.js'
                        });
                        var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != 'dataLayer' ? '&amp;l=' + l : '';
                        j.async = true;
                        j.src =
                            'https://www.googletagmanager.com/gtm.js?id=' + i + dl + (gtm_config[k].auth & amp; & amp; gtm_config[k].env ? '&amp;gtm_auth=' + gtm_config[k].auth + '&amp;gtm_preview=env-' + gtm_config[k].env + '&amp;gtm_cookies_win=x' : '');
                        f.parentNode.insertBefore(j, f);
                    })(window, document, 'script', 'dataLayer', gtm_config[k].container);
                }
            }
        }
    }

    function loadTrackingScripts() {
        // load the gtag.js script
        $('#initGtag').on('load', function() {
            initGTM();
        }).on('error', function() {
            initGTM();
        }).attr('src', $('#initGtag').attr('data-src'));

        initGa();
    }

    if (!GA_OPTED_OUT) {
        if (document.readyState === "complete") {
            loadTrackingScripts();
        } else {
            jQuery(window).on('load', loadTrackingScripts);
        }
    }

    //For user tracking
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) {
                return null;
            }
        } else {
            begin += 2;
        }
        var end = dc.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    }
    if (getCookie('ht') === null) {
        setCookie('ht', 0, true, 'C0002', true);
    }
    var hi = getCookie('hi');
    if (hi) {
        // Renew expiration date
        var expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 12);
        document.cookie = "hi=" + hi + "; expires=" + expirationDate.toUTCString() + "; path=" + des.cookiePath + "; domain=" + location.hostname.substring(location.hostname.lastIndexOf(".", location.hostname.lastIndexOf(".") - 1)) + "; secure; SameSite=None";
    }
})();

window.gaOptout = function() {
    GA_OPTED_OUT = true;
    document.cookie = 'ga-disable=1; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=' + des.cookiePath + '; domain=' + location.hostname.substring(location.hostname.lastIndexOf(".", location.hostname.lastIndexOf(".") - 1)) + '; secure; SameSite=None';
}; < /pre></body > < /html>