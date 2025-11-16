/** Namespace proto. */
export var proto;
(function (proto) {
    /** Represents a ADVDeviceIdentity. */
    class ADVDeviceIdentity {
        /** ADVDeviceIdentity rawId. */
        rawId;
        /** ADVDeviceIdentity timestamp. */
        timestamp;
        /** ADVDeviceIdentity keyIndex. */
        keyIndex;
        /** ADVDeviceIdentity accountType. */
        accountType;
        /** ADVDeviceIdentity deviceType. */
        deviceType;
    }
    /** ADVEncryptionType enum. */
    let ADVEncryptionType;
    (function (ADVEncryptionType) {
        ADVEncryptionType[ADVEncryptionType["E2EE"] = 0] = "E2EE";
        ADVEncryptionType[ADVEncryptionType["HOSTED"] = 1] = "HOSTED";
    })(ADVEncryptionType || (ADVEncryptionType = {}));
    /** Represents a ADVKeyIndexList. */
    class ADVKeyIndexList {
        /** ADVKeyIndexList rawId. */
        rawId;
        /** ADVKeyIndexList timestamp. */
        timestamp;
        /** ADVKeyIndexList currentIndex. */
        currentIndex;
        /** ADVKeyIndexList validIndexes. */
        validIndexes;
        /** ADVKeyIndexList accountType. */
        accountType;
    }
    /** Represents a ADVSignedDeviceIdentity. */
    class ADVSignedDeviceIdentity {
        /** ADVSignedDeviceIdentity details. */
        details;
        /** ADVSignedDeviceIdentity accountSignatureKey. */
        accountSignatureKey;
        /** ADVSignedDeviceIdentity accountSignature. */
        accountSignature;
        /** ADVSignedDeviceIdentity deviceSignature. */
        deviceSignature;
    }
    /** Represents a ADVSignedDeviceIdentityHMAC. */
    class ADVSignedDeviceIdentityHMAC {
        /** ADVSignedDeviceIdentityHMAC details. */
        details;
        /** ADVSignedDeviceIdentityHMAC hmac. */
        hmac;
        /** ADVSignedDeviceIdentityHMAC accountType. */
        accountType;
    }
    /** Represents a ADVSignedKeyIndexList. */
    class ADVSignedKeyIndexList {
        /** ADVSignedKeyIndexList details. */
        details;
        /** ADVSignedKeyIndexList accountSignature. */
        accountSignature;
        /** ADVSignedKeyIndexList accountSignatureKey. */
        accountSignatureKey;
    }
    /** Represents a AIQueryFanout. */
    class AIQueryFanout {
        /** AIQueryFanout messageKey. */
        messageKey;
        /** AIQueryFanout message. */
        message;
        /** AIQueryFanout timestamp. */
        timestamp;
    }
    /** Represents a AIRichResponseMessage. */
    class AIRichResponseMessage {
        /** AIRichResponseMessage messageType. */
        messageType;
        /** AIRichResponseMessage submessages. */
        submessages;
        /** AIRichResponseMessage unifiedResponse. */
        unifiedResponse;
    }
    (function (AIRichResponseMessage) {
        /** Represents a AIRichResponseCodeMetadata. */
        class AIRichResponseCodeMetadata {
            /** AIRichResponseCodeMetadata codeLanguage. */
            codeLanguage;
            /** AIRichResponseCodeMetadata codeBlocks. */
            codeBlocks;
        }
        (function (AIRichResponseCodeMetadata) {
            /** Represents a AIRichResponseCodeBlock. */
            class AIRichResponseCodeBlock {
                /** AIRichResponseCodeBlock highlightType. */
                highlightType;
                /** AIRichResponseCodeBlock codeContent. */
                codeContent;
            }
            /** AIRichResponseCodeHighlightType enum. */
            let AIRichResponseCodeHighlightType;
            (function (AIRichResponseCodeHighlightType) {
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER";
                AIRichResponseCodeHighlightType[AIRichResponseCodeHighlightType["AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT";
            })(AIRichResponseCodeHighlightType || (AIRichResponseCodeHighlightType = {}));
        })(AIRichResponseCodeMetadata || (AIRichResponseCodeMetadata = {}));
        /** Represents a AIRichResponseContentItemsMetadata. */
        class AIRichResponseContentItemsMetadata {
            /** AIRichResponseContentItemsMetadata itemsMetadata. */
            itemsMetadata;
            /** AIRichResponseContentItemsMetadata contentType. */
            contentType;
        }
        (function (AIRichResponseContentItemsMetadata) {
            /** Represents a AIRichResponseContentItemMetadata. */
            class AIRichResponseContentItemMetadata {
                /** AIRichResponseContentItemMetadata reelItem. */
                reelItem;
                /** AIRichResponseContentItemMetadata aIRichResponseContentItem. */
                aIRichResponseContentItem;
            }
            /** Represents a AIRichResponseReelItem. */
            class AIRichResponseReelItem {
                /** AIRichResponseReelItem title. */
                title;
                /** AIRichResponseReelItem profileIconUrl. */
                profileIconUrl;
                /** AIRichResponseReelItem thumbnailUrl. */
                thumbnailUrl;
                /** AIRichResponseReelItem videoUrl. */
                videoUrl;
            }
            /** ContentType enum. */
            let ContentType;
            (function (ContentType) {
                ContentType[ContentType["DEFAULT"] = 0] = "DEFAULT";
                ContentType[ContentType["CAROUSEL"] = 1] = "CAROUSEL";
            })(ContentType || (ContentType = {}));
        })(AIRichResponseContentItemsMetadata || (AIRichResponseContentItemsMetadata = {}));
        /** Represents a AIRichResponseDynamicMetadata. */
        class AIRichResponseDynamicMetadata {
            /** AIRichResponseDynamicMetadata type. */
            type;
            /** AIRichResponseDynamicMetadata version. */
            version;
            /** AIRichResponseDynamicMetadata url. */
            url;
            /** AIRichResponseDynamicMetadata loopCount. */
            loopCount;
        }
        (function (AIRichResponseDynamicMetadata) {
            /** AIRichResponseDynamicMetadataType enum. */
            let AIRichResponseDynamicMetadataType;
            (function (AIRichResponseDynamicMetadataType) {
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN";
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE";
                AIRichResponseDynamicMetadataType[AIRichResponseDynamicMetadataType["AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF";
            })(AIRichResponseDynamicMetadataType || (AIRichResponseDynamicMetadataType = {}));
        })(AIRichResponseDynamicMetadata || (AIRichResponseDynamicMetadata = {}));
        /** Represents a AIRichResponseGridImageMetadata. */
        class AIRichResponseGridImageMetadata {
            /** AIRichResponseGridImageMetadata gridImageUrl. */
            gridImageUrl;
            /** AIRichResponseGridImageMetadata imageUrls. */
            imageUrls;
        }
        /** Represents a AIRichResponseImageURL. */
        class AIRichResponseImageURL {
            /** AIRichResponseImageURL imagePreviewUrl. */
            imagePreviewUrl;
            /** AIRichResponseImageURL imageHighResUrl. */
            imageHighResUrl;
            /** AIRichResponseImageURL sourceUrl. */
            sourceUrl;
        }
        /** Represents a AIRichResponseInlineImageMetadata. */
        class AIRichResponseInlineImageMetadata {
            /** AIRichResponseInlineImageMetadata imageUrl. */
            imageUrl;
            /** AIRichResponseInlineImageMetadata imageText. */
            imageText;
            /** AIRichResponseInlineImageMetadata alignment. */
            alignment;
            /** AIRichResponseInlineImageMetadata tapLinkUrl. */
            tapLinkUrl;
        }
        (function (AIRichResponseInlineImageMetadata) {
            /** AIRichResponseImageAlignment enum. */
            let AIRichResponseImageAlignment;
            (function (AIRichResponseImageAlignment) {
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED";
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED";
                AIRichResponseImageAlignment[AIRichResponseImageAlignment["AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED";
            })(AIRichResponseImageAlignment || (AIRichResponseImageAlignment = {}));
        })(AIRichResponseInlineImageMetadata || (AIRichResponseInlineImageMetadata = {}));
        /** Represents a AIRichResponseLatexMetadata. */
        class AIRichResponseLatexMetadata {
            /** AIRichResponseLatexMetadata text. */
            text;
            /** AIRichResponseLatexMetadata expressions. */
            expressions;
        }
        (function (AIRichResponseLatexMetadata) {
            /** Represents a AIRichResponseLatexExpression. */
            class AIRichResponseLatexExpression {
                /** AIRichResponseLatexExpression latexExpression. */
                latexExpression;
                /** AIRichResponseLatexExpression url. */
                url;
                /** AIRichResponseLatexExpression width. */
                width;
                /** AIRichResponseLatexExpression height. */
                height;
                /** AIRichResponseLatexExpression fontHeight. */
                fontHeight;
                /** AIRichResponseLatexExpression imageTopPadding. */
                imageTopPadding;
                /** AIRichResponseLatexExpression imageLeadingPadding. */
                imageLeadingPadding;
                /** AIRichResponseLatexExpression imageBottomPadding. */
                imageBottomPadding;
                /** AIRichResponseLatexExpression imageTrailingPadding. */
                imageTrailingPadding;
            }
        })(AIRichResponseLatexMetadata || (AIRichResponseLatexMetadata = {}));
        /** Represents a AIRichResponseMapMetadata. */
        class AIRichResponseMapMetadata {
            /** AIRichResponseMapMetadata centerLatitude. */
            centerLatitude;
            /** AIRichResponseMapMetadata centerLongitude. */
            centerLongitude;
            /** AIRichResponseMapMetadata latitudeDelta. */
            latitudeDelta;
            /** AIRichResponseMapMetadata longitudeDelta. */
            longitudeDelta;
            /** AIRichResponseMapMetadata annotations. */
            annotations;
            /** AIRichResponseMapMetadata showInfoList. */
            showInfoList;
        }
        (function (AIRichResponseMapMetadata) {
            /** Represents a AIRichResponseMapAnnotation. */
            class AIRichResponseMapAnnotation {
                /** AIRichResponseMapAnnotation annotationNumber. */
                annotationNumber;
                /** AIRichResponseMapAnnotation latitude. */
                latitude;
                /** AIRichResponseMapAnnotation longitude. */
                longitude;
                /** AIRichResponseMapAnnotation title. */
                title;
                /** AIRichResponseMapAnnotation body. */
                body;
            }
        })(AIRichResponseMapMetadata || (AIRichResponseMapMetadata = {}));
        /** AIRichResponseMessageType enum. */
        let AIRichResponseMessageType;
        (function (AIRichResponseMessageType) {
            AIRichResponseMessageType[AIRichResponseMessageType["AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN";
            AIRichResponseMessageType[AIRichResponseMessageType["AI_RICH_RESPONSE_TYPE_STANDARD"] = 1] = "AI_RICH_RESPONSE_TYPE_STANDARD";
        })(AIRichResponseMessageType || (AIRichResponseMessageType = {}));
        /** Represents a AIRichResponseSubMessage. */
        class AIRichResponseSubMessage {
            /** AIRichResponseSubMessage messageType. */
            messageType;
            /** AIRichResponseSubMessage gridImageMetadata. */
            gridImageMetadata;
            /** AIRichResponseSubMessage messageText. */
            messageText;
            /** AIRichResponseSubMessage imageMetadata. */
            imageMetadata;
            /** AIRichResponseSubMessage codeMetadata. */
            codeMetadata;
            /** AIRichResponseSubMessage tableMetadata. */
            tableMetadata;
            /** AIRichResponseSubMessage dynamicMetadata. */
            dynamicMetadata;
            /** AIRichResponseSubMessage latexMetadata. */
            latexMetadata;
            /** AIRichResponseSubMessage mapMetadata. */
            mapMetadata;
            /** AIRichResponseSubMessage contentItemsMetadata. */
            contentItemsMetadata;
        }
        /** AIRichResponseSubMessageType enum. */
        let AIRichResponseSubMessageType;
        (function (AIRichResponseSubMessageType) {
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_UNKNOWN"] = 0] = "AI_RICH_RESPONSE_UNKNOWN";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_GRID_IMAGE"] = 1] = "AI_RICH_RESPONSE_GRID_IMAGE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_TEXT"] = 2] = "AI_RICH_RESPONSE_TEXT";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_INLINE_IMAGE"] = 3] = "AI_RICH_RESPONSE_INLINE_IMAGE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_TABLE"] = 4] = "AI_RICH_RESPONSE_TABLE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_CODE"] = 5] = "AI_RICH_RESPONSE_CODE";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_DYNAMIC"] = 6] = "AI_RICH_RESPONSE_DYNAMIC";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_MAP"] = 7] = "AI_RICH_RESPONSE_MAP";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_LATEX"] = 8] = "AI_RICH_RESPONSE_LATEX";
            AIRichResponseSubMessageType[AIRichResponseSubMessageType["AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9] = "AI_RICH_RESPONSE_CONTENT_ITEMS";
        })(AIRichResponseSubMessageType || (AIRichResponseSubMessageType = {}));
        /** Represents a AIRichResponseTableMetadata. */
        class AIRichResponseTableMetadata {
            /** AIRichResponseTableMetadata rows. */
            rows;
        }
        (function (AIRichResponseTableMetadata) {
            /** Represents a AIRichResponseTableRow. */
            class AIRichResponseTableRow {
                /** AIRichResponseTableRow items. */
                items;
                /** AIRichResponseTableRow isHeading. */
                isHeading;
            }
        })(AIRichResponseTableMetadata || (AIRichResponseTableMetadata = {}));
        /** Represents a AIRichResponseUnifiedResponse. */
        class AIRichResponseUnifiedResponse {
            /** AIRichResponseUnifiedResponse data. */
            data;
        }
    })(AIRichResponseMessage || (AIRichResponseMessage = {}));
    /** Represents an Account. */
    class Account {
        /** Account lid. */
        lid;
        /** Account username. */
        username;
        /** Account countryCode. */
        countryCode;
        /** Account isUsernameDeleted. */
        isUsernameDeleted;
    }
    /** Represents an ActionLink. */
    class ActionLink {
        /** ActionLink url. */
        url;
        /** ActionLink buttonTitle. */
        buttonTitle;
    }
    /** Represents an AutoDownloadSettings. */
    class AutoDownloadSettings {
        /** AutoDownloadSettings downloadImages. */
        downloadImages;
        /** AutoDownloadSettings downloadAudio. */
        downloadAudio;
        /** AutoDownloadSettings downloadVideo. */
        downloadVideo;
        /** AutoDownloadSettings downloadDocuments. */
        downloadDocuments;
    }
    /** Represents an AvatarUserSettings. */
    class AvatarUserSettings {
        /** AvatarUserSettings fbid. */
        fbid;
        /** AvatarUserSettings password. */
        password;
    }
    /** Represents a BizAccountLinkInfo. */
    class BizAccountLinkInfo {
        /** BizAccountLinkInfo whatsappBizAcctFbid. */
        whatsappBizAcctFbid;
        /** BizAccountLinkInfo whatsappAcctNumber. */
        whatsappAcctNumber;
        /** BizAccountLinkInfo issueTime. */
        issueTime;
        /** BizAccountLinkInfo hostStorage. */
        hostStorage;
        /** BizAccountLinkInfo accountType. */
        accountType;
    }
    (function (BizAccountLinkInfo) {
        /** AccountType enum. */
        let AccountType;
        (function (AccountType) {
            AccountType[AccountType["ENTERPRISE"] = 0] = "ENTERPRISE";
        })(AccountType || (AccountType = {}));
        /** HostStorageType enum. */
        let HostStorageType;
        (function (HostStorageType) {
            HostStorageType[HostStorageType["ON_PREMISE"] = 0] = "ON_PREMISE";
            HostStorageType[HostStorageType["FACEBOOK"] = 1] = "FACEBOOK";
        })(HostStorageType || (HostStorageType = {}));
    })(BizAccountLinkInfo || (BizAccountLinkInfo = {}));
    /** Represents a BizAccountPayload. */
    class BizAccountPayload {
        /** BizAccountPayload vnameCert. */
        vnameCert;
        /** BizAccountPayload bizAcctLinkInfo. */
        bizAcctLinkInfo;
    }
    /** Represents a BizIdentityInfo. */
    class BizIdentityInfo {
        /** BizIdentityInfo vlevel. */
        vlevel;
        /** BizIdentityInfo vnameCert. */
        vnameCert;
        /** BizIdentityInfo signed. */
        signed;
        /** BizIdentityInfo revoked. */
        revoked;
        /** BizIdentityInfo hostStorage. */
        hostStorage;
        /** BizIdentityInfo actualActors. */
        actualActors;
        /** BizIdentityInfo privacyModeTs. */
        privacyModeTs;
        /** BizIdentityInfo featureControls. */
        featureControls;
    }
    (function (BizIdentityInfo) {
        /** ActualActorsType enum. */
        let ActualActorsType;
        (function (ActualActorsType) {
            ActualActorsType[ActualActorsType["SELF"] = 0] = "SELF";
            ActualActorsType[ActualActorsType["BSP"] = 1] = "BSP";
        })(ActualActorsType || (ActualActorsType = {}));
        /** HostStorageType enum. */
        let HostStorageType;
        (function (HostStorageType) {
            HostStorageType[HostStorageType["ON_PREMISE"] = 0] = "ON_PREMISE";
            HostStorageType[HostStorageType["FACEBOOK"] = 1] = "FACEBOOK";
        })(HostStorageType || (HostStorageType = {}));
        /** VerifiedLevelValue enum. */
        let VerifiedLevelValue;
        (function (VerifiedLevelValue) {
            VerifiedLevelValue[VerifiedLevelValue["UNKNOWN"] = 0] = "UNKNOWN";
            VerifiedLevelValue[VerifiedLevelValue["LOW"] = 1] = "LOW";
            VerifiedLevelValue[VerifiedLevelValue["HIGH"] = 2] = "HIGH";
        })(VerifiedLevelValue || (VerifiedLevelValue = {}));
    })(BizIdentityInfo || (BizIdentityInfo = {}));
    /** Represents a BotAgeCollectionMetadata. */
    class BotAgeCollectionMetadata {
        /** BotAgeCollectionMetadata ageCollectionEligible. */
        ageCollectionEligible;
        /** BotAgeCollectionMetadata shouldTriggerAgeCollectionOnClient. */
        shouldTriggerAgeCollectionOnClient;
    }
    /** Represents a BotAvatarMetadata. */
    class BotAvatarMetadata {
        /** BotAvatarMetadata sentiment. */
        sentiment;
        /** BotAvatarMetadata behaviorGraph. */
        behaviorGraph;
        /** BotAvatarMetadata action. */
        action;
        /** BotAvatarMetadata intensity. */
        intensity;
        /** BotAvatarMetadata wordCount. */
        wordCount;
    }
    /** Represents a BotCapabilityMetadata. */
    class BotCapabilityMetadata {
        /** BotCapabilityMetadata capabilities. */
        capabilities;
    }
    (function (BotCapabilityMetadata) {
        /** BotCapabilityType enum. */
        let BotCapabilityType;
        (function (BotCapabilityType) {
            BotCapabilityType[BotCapabilityType["UNKNOWN"] = 0] = "UNKNOWN";
            BotCapabilityType[BotCapabilityType["PROGRESS_INDICATOR"] = 1] = "PROGRESS_INDICATOR";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_HEADING"] = 2] = "RICH_RESPONSE_HEADING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_NESTED_LIST"] = 3] = "RICH_RESPONSE_NESTED_LIST";
            BotCapabilityType[BotCapabilityType["AI_MEMORY"] = 4] = "AI_MEMORY";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_THREAD_SURFING"] = 5] = "RICH_RESPONSE_THREAD_SURFING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_TABLE"] = 6] = "RICH_RESPONSE_TABLE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_CODE"] = 7] = "RICH_RESPONSE_CODE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8] = "RICH_RESPONSE_STRUCTURED_RESPONSE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_INLINE_IMAGE"] = 9] = "RICH_RESPONSE_INLINE_IMAGE";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9";
            BotCapabilityType[BotCapabilityType["WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_SUB_HEADING"] = 21] = "RICH_RESPONSE_SUB_HEADING";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_GRID_IMAGE"] = 22] = "RICH_RESPONSE_GRID_IMAGE";
            BotCapabilityType[BotCapabilityType["AI_STUDIO_UGC_MEMORY"] = 23] = "AI_STUDIO_UGC_MEMORY";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_LATEX"] = 24] = "RICH_RESPONSE_LATEX";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_MAPS"] = 25] = "RICH_RESPONSE_MAPS";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_INLINE_REELS"] = 26] = "RICH_RESPONSE_INLINE_REELS";
            BotCapabilityType[BotCapabilityType["AGENTIC_PLANNING"] = 27] = "AGENTIC_PLANNING";
            BotCapabilityType[BotCapabilityType["ACCOUNT_LINKING"] = 28] = "ACCOUNT_LINKING";
            BotCapabilityType[BotCapabilityType["STREAMING_DISAGGREGATION"] = 29] = "STREAMING_DISAGGREGATION";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_GRID_IMAGE_3P"] = 30] = "RICH_RESPONSE_GRID_IMAGE_3P";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_LATEX_INLINE"] = 31] = "RICH_RESPONSE_LATEX_INLINE";
            BotCapabilityType[BotCapabilityType["QUERY_PLAN"] = 32] = "QUERY_PLAN";
            BotCapabilityType[BotCapabilityType["PROACTIVE_MESSAGE"] = 33] = "PROACTIVE_MESSAGE";
            BotCapabilityType[BotCapabilityType["RICH_RESPONSE_UNIFIED_RESPONSE"] = 34] = "RICH_RESPONSE_UNIFIED_RESPONSE";
            BotCapabilityType[BotCapabilityType["PROMOTION_MESSAGE"] = 35] = "PROMOTION_MESSAGE";
        })(BotCapabilityType || (BotCapabilityType = {}));
    })(BotCapabilityMetadata || (BotCapabilityMetadata = {}));
    /** Represents a BotImagineMetadata. */
    class BotImagineMetadata {
        /** BotImagineMetadata imagineType. */
        imagineType;
    }
    (function (BotImagineMetadata) {
        /** ImagineType enum. */
        let ImagineType;
        (function (ImagineType) {
            ImagineType[ImagineType["UNKNOWN"] = 0] = "UNKNOWN";
            ImagineType[ImagineType["IMAGINE"] = 1] = "IMAGINE";
            ImagineType[ImagineType["MEMU"] = 2] = "MEMU";
            ImagineType[ImagineType["FLASH"] = 3] = "FLASH";
            ImagineType[ImagineType["EDIT"] = 4] = "EDIT";
        })(ImagineType || (ImagineType = {}));
    })(BotImagineMetadata || (BotImagineMetadata = {}));
    /** Represents a BotLinkedAccount. */
    class BotLinkedAccount {
        /** BotLinkedAccount type. */
        type;
    }
    (function (BotLinkedAccount) {
        /** BotLinkedAccountType enum. */
        let BotLinkedAccountType;
        (function (BotLinkedAccountType) {
            BotLinkedAccountType[BotLinkedAccountType["BOT_LINKED_ACCOUNT_TYPE_1P"] = 0] = "BOT_LINKED_ACCOUNT_TYPE_1P";
        })(BotLinkedAccountType || (BotLinkedAccountType = {}));
    })(BotLinkedAccount || (BotLinkedAccount = {}));
    /** Represents a BotLinkedAccountsMetadata. */
    class BotLinkedAccountsMetadata {
        /** BotLinkedAccountsMetadata accounts. */
        accounts;
        /** BotLinkedAccountsMetadata acAuthTokens. */
        acAuthTokens;
        /** BotLinkedAccountsMetadata acErrorCode. */
        acErrorCode;
    }
    /** Represents a BotMediaMetadata. */
    class BotMediaMetadata {
        /** BotMediaMetadata fileSha256. */
        fileSha256;
        /** BotMediaMetadata mediaKey. */
        mediaKey;
        /** BotMediaMetadata fileEncSha256. */
        fileEncSha256;
        /** BotMediaMetadata directPath. */
        directPath;
        /** BotMediaMetadata mediaKeyTimestamp. */
        mediaKeyTimestamp;
        /** BotMediaMetadata mimetype. */
        mimetype;
        /** BotMediaMetadata orientationType. */
        orientationType;
    }
    (function (BotMediaMetadata) {
        /** OrientationType enum. */
        let OrientationType;
        (function (OrientationType) {
            OrientationType[OrientationType["CENTER"] = 1] = "CENTER";
            OrientationType[OrientationType["LEFT"] = 2] = "LEFT";
            OrientationType[OrientationType["RIGHT"] = 3] = "RIGHT";
        })(OrientationType || (OrientationType = {}));
    })(BotMediaMetadata || (BotMediaMetadata = {}));
    /** Represents a BotMemoryFact. */
    class BotMemoryFact {
        /** BotMemoryFact fact. */
        fact;
        /** BotMemoryFact factId. */
        factId;
    }
    /** Represents a BotMemoryMetadata. */
    class BotMemoryMetadata {
        /** BotMemoryMetadata addedFacts. */
        addedFacts;
        /** BotMemoryMetadata removedFacts. */
        removedFacts;
        /** BotMemoryMetadata disclaimer. */
        disclaimer;
    }
    /** Represents a BotMemuMetadata. */
    class BotMemuMetadata {
        /** BotMemuMetadata faceImages. */
        faceImages;
    }
    /** Represents a BotMetadata. */
    class BotMetadata {
        /** BotMetadata avatarMetadata. */
        avatarMetadata;
        /** BotMetadata personaId. */
        personaId;
        /** BotMetadata pluginMetadata. */
        pluginMetadata;
        /** BotMetadata suggestedPromptMetadata. */
        suggestedPromptMetadata;
        /** BotMetadata invokerJid. */
        invokerJid;
        /** BotMetadata sessionMetadata. */
        sessionMetadata;
        /** BotMetadata memuMetadata. */
        memuMetadata;
        /** BotMetadata timezone. */
        timezone;
        /** BotMetadata reminderMetadata. */
        reminderMetadata;
        /** BotMetadata modelMetadata. */
        modelMetadata;
        /** BotMetadata messageDisclaimerText. */
        messageDisclaimerText;
        /** BotMetadata progressIndicatorMetadata. */
        progressIndicatorMetadata;
        /** BotMetadata capabilityMetadata. */
        capabilityMetadata;
        /** BotMetadata imagineMetadata. */
        imagineMetadata;
        /** BotMetadata memoryMetadata. */
        memoryMetadata;
        /** BotMetadata renderingMetadata. */
        renderingMetadata;
        /** BotMetadata botMetricsMetadata. */
        botMetricsMetadata;
        /** BotMetadata botLinkedAccountsMetadata. */
        botLinkedAccountsMetadata;
        /** BotMetadata richResponseSourcesMetadata. */
        richResponseSourcesMetadata;
        /** BotMetadata aiConversationContext. */
        aiConversationContext;
        /** BotMetadata botPromotionMessageMetadata. */
        botPromotionMessageMetadata;
        /** BotMetadata botModeSelectionMetadata. */
        botModeSelectionMetadata;
        /** BotMetadata botQuotaMetadata. */
        botQuotaMetadata;
        /** BotMetadata botAgeCollectionMetadata. */
        botAgeCollectionMetadata;
    }
    /** BotMetricsEntryPoint enum. */
    let BotMetricsEntryPoint;
    (function (BotMetricsEntryPoint) {
        BotMetricsEntryPoint[BotMetricsEntryPoint["FAVICON"] = 1] = "FAVICON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["CHATLIST"] = 2] = "CHATLIST";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_NULL_STATE_PAPER_PLANE"] = 3] = "AISEARCH_NULL_STATE_PAPER_PLANE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_NULL_STATE_SUGGESTION"] = 4] = "AISEARCH_NULL_STATE_SUGGESTION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5] = "AISEARCH_TYPE_AHEAD_SUGGESTION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AIVOICE_SEARCH_BAR"] = 9] = "AIVOICE_SEARCH_BAR";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AIVOICE_FAVICON"] = 10] = "AIVOICE_FAVICON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AISTUDIO"] = 11] = "AISTUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["DEEPLINK"] = 12] = "DEEPLINK";
        BotMetricsEntryPoint[BotMetricsEntryPoint["NOTIFICATION"] = 13] = "NOTIFICATION";
        BotMetricsEntryPoint[BotMetricsEntryPoint["PROFILE_MESSAGE_BUTTON"] = 14] = "PROFILE_MESSAGE_BUTTON";
        BotMetricsEntryPoint[BotMetricsEntryPoint["FORWARD"] = 15] = "FORWARD";
        BotMetricsEntryPoint[BotMetricsEntryPoint["APP_SHORTCUT"] = 16] = "APP_SHORTCUT";
        BotMetricsEntryPoint[BotMetricsEntryPoint["FF_FAMILY"] = 17] = "FF_FAMILY";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_TAB"] = 18] = "AI_TAB";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_HOME"] = 19] = "AI_HOME";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_DEEPLINK_IMMERSIVE"] = 20] = "AI_DEEPLINK_IMMERSIVE";
        BotMetricsEntryPoint[BotMetricsEntryPoint["AI_DEEPLINK"] = 21] = "AI_DEEPLINK";
        BotMetricsEntryPoint[BotMetricsEntryPoint["META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23] = "UGC_CHAT_SHORTCUT_AI_STUDIO";
        BotMetricsEntryPoint[BotMetricsEntryPoint["NEW_CHAT_AI_STUDIO"] = 24] = "NEW_CHAT_AI_STUDIO";
    })(BotMetricsEntryPoint || (BotMetricsEntryPoint = {}));
    /** Represents a BotMetricsMetadata. */
    class BotMetricsMetadata {
        /** BotMetricsMetadata destinationId. */
        destinationId;
        /** BotMetricsMetadata destinationEntryPoint. */
        destinationEntryPoint;
        /** BotMetricsMetadata threadOrigin. */
        threadOrigin;
    }
    /** BotMetricsThreadEntryPoint enum. */
    let BotMetricsThreadEntryPoint;
    (function (BotMetricsThreadEntryPoint) {
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_TAB_THREAD"] = 1] = "AI_TAB_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_HOME_THREAD"] = 2] = "AI_HOME_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_DEEPLINK_IMMERSIVE_THREAD"] = 3] = "AI_DEEPLINK_IMMERSIVE_THREAD";
        BotMetricsThreadEntryPoint[BotMetricsThreadEntryPoint["AI_DEEPLINK_THREAD"] = 4] = "AI_DEEPLINK_THREAD";
    })(BotMetricsThreadEntryPoint || (BotMetricsThreadEntryPoint = {}));
    /** Represents a BotModeSelectionMetadata. */
    class BotModeSelectionMetadata {
        /** BotModeSelectionMetadata mode. */
        mode;
    }
    (function (BotModeSelectionMetadata) {
        /** BotUserSelectionMode enum. */
        let BotUserSelectionMode;
        (function (BotUserSelectionMode) {
            BotUserSelectionMode[BotUserSelectionMode["UNKNOWN_MODE"] = 0] = "UNKNOWN_MODE";
            BotUserSelectionMode[BotUserSelectionMode["REASONING_MODE"] = 1] = "REASONING_MODE";
        })(BotUserSelectionMode || (BotUserSelectionMode = {}));
    })(BotModeSelectionMetadata || (BotModeSelectionMetadata = {}));
    /** Represents a BotModelMetadata. */
    class BotModelMetadata {
        /** BotModelMetadata modelType. */
        modelType;
        /** BotModelMetadata premiumModelStatus. */
        premiumModelStatus;
    }
    (function (BotModelMetadata) {
        /** ModelType enum. */
        let ModelType;
        (function (ModelType) {
            ModelType[ModelType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            ModelType[ModelType["LLAMA_PROD"] = 1] = "LLAMA_PROD";
            ModelType[ModelType["LLAMA_PROD_PREMIUM"] = 2] = "LLAMA_PROD_PREMIUM";
        })(ModelType || (ModelType = {}));
        /** PremiumModelStatus enum. */
        let PremiumModelStatus;
        (function (PremiumModelStatus) {
            PremiumModelStatus[PremiumModelStatus["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
            PremiumModelStatus[PremiumModelStatus["AVAILABLE"] = 1] = "AVAILABLE";
            PremiumModelStatus[PremiumModelStatus["QUOTA_EXCEED_LIMIT"] = 2] = "QUOTA_EXCEED_LIMIT";
        })(PremiumModelStatus || (PremiumModelStatus = {}));
    })(BotModelMetadata || (BotModelMetadata = {}));
    /** Represents a BotPluginMetadata. */
    class BotPluginMetadata {
        /** BotPluginMetadata provider. */
        provider;
        /** BotPluginMetadata pluginType. */
        pluginType;
        /** BotPluginMetadata thumbnailCdnUrl. */
        thumbnailCdnUrl;
        /** BotPluginMetadata profilePhotoCdnUrl. */
        profilePhotoCdnUrl;
        /** BotPluginMetadata searchProviderUrl. */
        searchProviderUrl;
        /** BotPluginMetadata referenceIndex. */
        referenceIndex;
        /** BotPluginMetadata expectedLinksCount. */
        expectedLinksCount;
        /** BotPluginMetadata searchQuery. */
        searchQuery;
        /** BotPluginMetadata parentPluginMessageKey. */
        parentPluginMessageKey;
        /** BotPluginMetadata deprecatedField. */
        deprecatedField;
        /** BotPluginMetadata parentPluginType. */
        parentPluginType;
        /** BotPluginMetadata faviconCdnUrl. */
        faviconCdnUrl;
    }
    (function (BotPluginMetadata) {
        /** PluginType enum. */
        let PluginType;
        (function (PluginType) {
            PluginType[PluginType["UNKNOWN_PLUGIN"] = 0] = "UNKNOWN_PLUGIN";
            PluginType[PluginType["REELS"] = 1] = "REELS";
            PluginType[PluginType["SEARCH"] = 2] = "SEARCH";
        })(PluginType || (PluginType = {}));
        /** SearchProvider enum. */
        let SearchProvider;
        (function (SearchProvider) {
            SearchProvider[SearchProvider["UNKNOWN"] = 0] = "UNKNOWN";
            SearchProvider[SearchProvider["BING"] = 1] = "BING";
            SearchProvider[SearchProvider["GOOGLE"] = 2] = "GOOGLE";
            SearchProvider[SearchProvider["SUPPORT"] = 3] = "SUPPORT";
        })(SearchProvider || (SearchProvider = {}));
    })(BotPluginMetadata || (BotPluginMetadata = {}));
    /** Represents a BotProgressIndicatorMetadata. */
    class BotProgressIndicatorMetadata {
        /** BotProgressIndicatorMetadata progressDescription. */
        progressDescription;
        /** BotProgressIndicatorMetadata stepsMetadata. */
        stepsMetadata;
    }
    (function (BotProgressIndicatorMetadata) {
        /** Represents a BotPlanningStepMetadata. */
        class BotPlanningStepMetadata {
            /** BotPlanningStepMetadata statusTitle. */
            statusTitle;
            /** BotPlanningStepMetadata statusBody. */
            statusBody;
            /** BotPlanningStepMetadata sourcesMetadata. */
            sourcesMetadata;
            /** BotPlanningStepMetadata status. */
            status;
            /** BotPlanningStepMetadata isReasoning. */
            isReasoning;
            /** BotPlanningStepMetadata isEnhancedSearch. */
            isEnhancedSearch;
            /** BotPlanningStepMetadata sections. */
            sections;
        }
        (function (BotPlanningStepMetadata) {
            /** Represents a BotPlanningSearchSourceMetadata. */
            class BotPlanningSearchSourceMetadata {
                /** BotPlanningSearchSourceMetadata title. */
                title;
                /** BotPlanningSearchSourceMetadata provider. */
                provider;
                /** BotPlanningSearchSourceMetadata sourceUrl. */
                sourceUrl;
                /** BotPlanningSearchSourceMetadata favIconUrl. */
                favIconUrl;
            }
            /** Represents a BotPlanningSearchSourcesMetadata. */
            class BotPlanningSearchSourcesMetadata {
                /** BotPlanningSearchSourcesMetadata sourceTitle. */
                sourceTitle;
                /** BotPlanningSearchSourcesMetadata provider. */
                provider;
                /** BotPlanningSearchSourcesMetadata sourceUrl. */
                sourceUrl;
            }
            (function (BotPlanningSearchSourcesMetadata) {
                /** BotPlanningSearchSourceProvider enum. */
                let BotPlanningSearchSourceProvider;
                (function (BotPlanningSearchSourceProvider) {
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["UNKNOWN"] = 0] = "UNKNOWN";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["OTHER"] = 1] = "OTHER";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["GOOGLE"] = 2] = "GOOGLE";
                    BotPlanningSearchSourceProvider[BotPlanningSearchSourceProvider["BING"] = 3] = "BING";
                })(BotPlanningSearchSourceProvider || (BotPlanningSearchSourceProvider = {}));
            })(BotPlanningSearchSourcesMetadata || (BotPlanningSearchSourcesMetadata = {}));
            /** Represents a BotPlanningStepSectionMetadata. */
            class BotPlanningStepSectionMetadata {
                /** BotPlanningStepSectionMetadata sectionTitle. */
                sectionTitle;
                /** BotPlanningStepSectionMetadata sectionBody. */
                sectionBody;
                /** BotPlanningStepSectionMetadata sourcesMetadata. */
                sourcesMetadata;
            }
            /** BotSearchSourceProvider enum. */
            let BotSearchSourceProvider;
            (function (BotSearchSourceProvider) {
                BotSearchSourceProvider[BotSearchSourceProvider["UNKNOWN_PROVIDER"] = 0] = "UNKNOWN_PROVIDER";
                BotSearchSourceProvider[BotSearchSourceProvider["OTHER"] = 1] = "OTHER";
                BotSearchSourceProvider[BotSearchSourceProvider["GOOGLE"] = 2] = "GOOGLE";
                BotSearchSourceProvider[BotSearchSourceProvider["BING"] = 3] = "BING";
            })(BotSearchSourceProvider || (BotSearchSourceProvider = {}));
            /** PlanningStepStatus enum. */
            let PlanningStepStatus;
            (function (PlanningStepStatus) {
                PlanningStepStatus[PlanningStepStatus["UNKNOWN"] = 0] = "UNKNOWN";
                PlanningStepStatus[PlanningStepStatus["PLANNED"] = 1] = "PLANNED";
                PlanningStepStatus[PlanningStepStatus["EXECUTING"] = 2] = "EXECUTING";
                PlanningStepStatus[PlanningStepStatus["FINISHED"] = 3] = "FINISHED";
            })(PlanningStepStatus || (PlanningStepStatus = {}));
        })(BotPlanningStepMetadata || (BotPlanningStepMetadata = {}));
    })(BotProgressIndicatorMetadata || (BotProgressIndicatorMetadata = {}));
    /** Represents a BotPromotionMessageMetadata. */
    class BotPromotionMessageMetadata {
        /** BotPromotionMessageMetadata promotionType. */
        promotionType;
        /** BotPromotionMessageMetadata buttonTitle. */
        buttonTitle;
    }
    (function (BotPromotionMessageMetadata) {
        /** BotPromotionType enum. */
        let BotPromotionType;
        (function (BotPromotionType) {
            BotPromotionType[BotPromotionType["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            BotPromotionType[BotPromotionType["C50"] = 1] = "C50";
        })(BotPromotionType || (BotPromotionType = {}));
    })(BotPromotionMessageMetadata || (BotPromotionMessageMetadata = {}));
    /** Represents a BotPromptSuggestion. */
    class BotPromptSuggestion {
        /** BotPromptSuggestion prompt. */
        prompt;
        /** BotPromptSuggestion promptId. */
        promptId;
    }
    /** Represents a BotPromptSuggestions. */
    class BotPromptSuggestions {
        /** BotPromptSuggestions suggestions. */
        suggestions;
    }
    /** Represents a BotQuotaMetadata. */
    class BotQuotaMetadata {
        /** BotQuotaMetadata botFeatureQuotaMetadata. */
        botFeatureQuotaMetadata;
    }
    (function (BotQuotaMetadata) {
        /** Represents a BotFeatureQuotaMetadata. */
        class BotFeatureQuotaMetadata {
            /** BotFeatureQuotaMetadata featureType. */
            featureType;
            /** BotFeatureQuotaMetadata remainingQuota. */
            remainingQuota;
            /** BotFeatureQuotaMetadata expirationTimestamp. */
            expirationTimestamp;
        }
        (function (BotFeatureQuotaMetadata) {
            /** BotFeatureType enum. */
            let BotFeatureType;
            (function (BotFeatureType) {
                BotFeatureType[BotFeatureType["UNKNOWN_FEATURE"] = 0] = "UNKNOWN_FEATURE";
                BotFeatureType[BotFeatureType["REASONING_FEATURE"] = 1] = "REASONING_FEATURE";
            })(BotFeatureType || (BotFeatureType = {}));
        })(BotFeatureQuotaMetadata || (BotFeatureQuotaMetadata = {}));
    })(BotQuotaMetadata || (BotQuotaMetadata = {}));
    /** Represents a BotReminderMetadata. */
    class BotReminderMetadata {
        /** BotReminderMetadata requestMessageKey. */
        requestMessageKey;
        /** BotReminderMetadata action. */
        action;
        /** BotReminderMetadata name. */
        name;
        /** BotReminderMetadata nextTriggerTimestamp. */
        nextTriggerTimestamp;
        /** BotReminderMetadata frequency. */
        frequency;
    }
    (function (BotReminderMetadata) {
        /** ReminderAction enum. */
        let ReminderAction;
        (function (ReminderAction) {
            ReminderAction[ReminderAction["NOTIFY"] = 1] = "NOTIFY";
            ReminderAction[ReminderAction["CREATE"] = 2] = "CREATE";
            ReminderAction[ReminderAction["DELETE"] = 3] = "DELETE";
            ReminderAction[ReminderAction["UPDATE"] = 4] = "UPDATE";
        })(ReminderAction || (ReminderAction = {}));
        /** ReminderFrequency enum. */
        let ReminderFrequency;
        (function (ReminderFrequency) {
            ReminderFrequency[ReminderFrequency["ONCE"] = 1] = "ONCE";
            ReminderFrequency[ReminderFrequency["DAILY"] = 2] = "DAILY";
            ReminderFrequency[ReminderFrequency["WEEKLY"] = 3] = "WEEKLY";
            ReminderFrequency[ReminderFrequency["BIWEEKLY"] = 4] = "BIWEEKLY";
            ReminderFrequency[ReminderFrequency["MONTHLY"] = 5] = "MONTHLY";
        })(ReminderFrequency || (ReminderFrequency = {}));
    })(BotReminderMetadata || (BotReminderMetadata = {}));
    /** Represents a BotRenderingMetadata. */
    class BotRenderingMetadata {
        /** BotRenderingMetadata keywords. */
        keywords;
    }
    (function (BotRenderingMetadata) {
        /** Represents a Keyword. */
        class Keyword {
            /** Keyword value. */
            value;
            /** Keyword associatedPrompts. */
            associatedPrompts;
        }
    })(BotRenderingMetadata || (BotRenderingMetadata = {}));
    /** Represents a BotSessionMetadata. */
    class BotSessionMetadata {
        /** BotSessionMetadata sessionId. */
        sessionId;
        /** BotSessionMetadata sessionSource. */
        sessionSource;
    }
    /** BotSessionSource enum. */
    let BotSessionSource;
    (function (BotSessionSource) {
        BotSessionSource[BotSessionSource["NONE"] = 0] = "NONE";
        BotSessionSource[BotSessionSource["NULL_STATE"] = 1] = "NULL_STATE";
        BotSessionSource[BotSessionSource["TYPEAHEAD"] = 2] = "TYPEAHEAD";
        BotSessionSource[BotSessionSource["USER_INPUT"] = 3] = "USER_INPUT";
        BotSessionSource[BotSessionSource["EMU_FLASH"] = 4] = "EMU_FLASH";
        BotSessionSource[BotSessionSource["EMU_FLASH_FOLLOWUP"] = 5] = "EMU_FLASH_FOLLOWUP";
        BotSessionSource[BotSessionSource["VOICE"] = 6] = "VOICE";
    })(BotSessionSource || (BotSessionSource = {}));
    /** Represents a BotSourcesMetadata. */
    class BotSourcesMetadata {
        /** BotSourcesMetadata sources. */
        sources;
    }
    (function (BotSourcesMetadata) {
        /** Represents a BotSourceItem. */
        class BotSourceItem {
            /** BotSourceItem provider. */
            provider;
            /** BotSourceItem thumbnailCdnUrl. */
            thumbnailCdnUrl;
            /** BotSourceItem sourceProviderUrl. */
            sourceProviderUrl;
            /** BotSourceItem sourceQuery. */
            sourceQuery;
            /** BotSourceItem faviconCdnUrl. */
            faviconCdnUrl;
            /** BotSourceItem citationNumber. */
            citationNumber;
        }
        (function (BotSourceItem) {
            /** SourceProvider enum. */
            let SourceProvider;
            (function (SourceProvider) {
                SourceProvider[SourceProvider["UNKNOWN"] = 0] = "UNKNOWN";
                SourceProvider[SourceProvider["BING"] = 1] = "BING";
                SourceProvider[SourceProvider["GOOGLE"] = 2] = "GOOGLE";
                SourceProvider[SourceProvider["SUPPORT"] = 3] = "SUPPORT";
            })(SourceProvider || (SourceProvider = {}));
        })(BotSourceItem || (BotSourceItem = {}));
    })(BotSourcesMetadata || (BotSourcesMetadata = {}));
    /** Represents a BotSuggestedPromptMetadata. */
    class BotSuggestedPromptMetadata {
        /** BotSuggestedPromptMetadata suggestedPrompts. */
        suggestedPrompts;
        /** BotSuggestedPromptMetadata selectedPromptIndex. */
        selectedPromptIndex;
        /** BotSuggestedPromptMetadata promptSuggestions. */
        promptSuggestions;
        /** BotSuggestedPromptMetadata selectedPromptId. */
        selectedPromptId;
    }
    /** Represents a CallLogRecord. */
    class CallLogRecord {
        /** CallLogRecord callResult. */
        callResult;
        /** CallLogRecord isDndMode. */
        isDndMode;
        /** CallLogRecord silenceReason. */
        silenceReason;
        /** CallLogRecord duration. */
        duration;
        /** CallLogRecord startTime. */
        startTime;
        /** CallLogRecord isIncoming. */
        isIncoming;
        /** CallLogRecord isVideo. */
        isVideo;
        /** CallLogRecord isCallLink. */
        isCallLink;
        /** CallLogRecord callLinkToken. */
        callLinkToken;
        /** CallLogRecord scheduledCallId. */
        scheduledCallId;
        /** CallLogRecord callId. */
        callId;
        /** CallLogRecord callCreatorJid. */
        callCreatorJid;
        /** CallLogRecord groupJid. */
        groupJid;
        /** CallLogRecord participants. */
        participants;
        /** CallLogRecord callType. */
        callType;
    }
    (function (CallLogRecord) {
        /** CallResult enum. */
        let CallResult;
        (function (CallResult) {
            CallResult[CallResult["CONNECTED"] = 0] = "CONNECTED";
            CallResult[CallResult["REJECTED"] = 1] = "REJECTED";
            CallResult[CallResult["CANCELLED"] = 2] = "CANCELLED";
            CallResult[CallResult["ACCEPTEDELSEWHERE"] = 3] = "ACCEPTEDELSEWHERE";
            CallResult[CallResult["MISSED"] = 4] = "MISSED";
            CallResult[CallResult["INVALID"] = 5] = "INVALID";
            CallResult[CallResult["UNAVAILABLE"] = 6] = "UNAVAILABLE";
            CallResult[CallResult["UPCOMING"] = 7] = "UPCOMING";
            CallResult[CallResult["FAILED"] = 8] = "FAILED";
            CallResult[CallResult["ABANDONED"] = 9] = "ABANDONED";
            CallResult[CallResult["ONGOING"] = 10] = "ONGOING";
        })(CallResult || (CallResult = {}));
        /** CallType enum. */
        let CallType;
        (function (CallType) {
            CallType[CallType["REGULAR"] = 0] = "REGULAR";
            CallType[CallType["SCHEDULED_CALL"] = 1] = "SCHEDULED_CALL";
            CallType[CallType["VOICE_CHAT"] = 2] = "VOICE_CHAT";
        })(CallType || (CallType = {}));
        /** Represents a ParticipantInfo. */
        class ParticipantInfo {
            /** ParticipantInfo userJid. */
            userJid;
            /** ParticipantInfo callResult. */
            callResult;
        }
        /** SilenceReason enum. */
        let SilenceReason;
        (function (SilenceReason) {
            SilenceReason[SilenceReason["NONE"] = 0] = "NONE";
            SilenceReason[SilenceReason["SCHEDULED"] = 1] = "SCHEDULED";
            SilenceReason[SilenceReason["PRIVACY"] = 2] = "PRIVACY";
            SilenceReason[SilenceReason["LIGHTWEIGHT"] = 3] = "LIGHTWEIGHT";
        })(SilenceReason || (SilenceReason = {}));
    })(CallLogRecord || (CallLogRecord = {}));
    /** Represents a CertChain. */
    class CertChain {
        /** CertChain leaf. */
        leaf;
        /** CertChain intermediate. */
        intermediate;
    }
    (function (CertChain) {
        /** Represents a NoiseCertificate. */
        class NoiseCertificate {
            /** NoiseCertificate details. */
            details;
            /** NoiseCertificate signature. */
            signature;
        }
        (function (NoiseCertificate) {
            /** Represents a Details. */
            class Details {
                /** Details serial. */
                serial;
                /** Details issuerSerial. */
                issuerSerial;
                /** Details key. */
                key;
                /** Details notBefore. */
                notBefore;
                /** Details notAfter. */
                notAfter;
            }
        })(NoiseCertificate || (NoiseCertificate = {}));
    })(CertChain || (CertChain = {}));
    /** Represents a ChatLockSettings. */
    class ChatLockSettings {
        /** ChatLockSettings hideLockedChats. */
        hideLockedChats;
        /** ChatLockSettings secretCode. */
        secretCode;
    }
    /** Represents a ChatRowOpaqueData. */
    class ChatRowOpaqueData {
        /** ChatRowOpaqueData draftMessage. */
        draftMessage;
    }
    (function (ChatRowOpaqueData) {
        /** Represents a DraftMessage. */
        class DraftMessage {
            /** DraftMessage text. */
            text;
            /** DraftMessage omittedUrl. */
            omittedUrl;
            /** DraftMessage ctwaContextLinkData. */
            ctwaContextLinkData;
            /** DraftMessage ctwaContext. */
            ctwaContext;
            /** DraftMessage timestamp. */
            timestamp;
        }
        (function (DraftMessage) {
            /** Represents a CtwaContextData. */
            class CtwaContextData {
                /** CtwaContextData conversionSource. */
                conversionSource;
                /** CtwaContextData conversionData. */
                conversionData;
                /** CtwaContextData sourceUrl. */
                sourceUrl;
                /** CtwaContextData sourceId. */
                sourceId;
                /** CtwaContextData sourceType. */
                sourceType;
                /** CtwaContextData title. */
                title;
                /** CtwaContextData description. */
                description;
                /** CtwaContextData thumbnail. */
                thumbnail;
                /** CtwaContextData thumbnailUrl. */
                thumbnailUrl;
                /** CtwaContextData mediaType. */
                mediaType;
                /** CtwaContextData mediaUrl. */
                mediaUrl;
                /** CtwaContextData isSuspiciousLink. */
                isSuspiciousLink;
            }
            (function (CtwaContextData) {
                /** ContextInfoExternalAdReplyInfoMediaType enum. */
                let ContextInfoExternalAdReplyInfoMediaType;
                (function (ContextInfoExternalAdReplyInfoMediaType) {
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["NONE"] = 0] = "NONE";
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["IMAGE"] = 1] = "IMAGE";
                    ContextInfoExternalAdReplyInfoMediaType[ContextInfoExternalAdReplyInfoMediaType["VIDEO"] = 2] = "VIDEO";
                })(ContextInfoExternalAdReplyInfoMediaType || (ContextInfoExternalAdReplyInfoMediaType = {}));
            })(CtwaContextData || (CtwaContextData = {}));
            /** Represents a CtwaContextLinkData. */
            class CtwaContextLinkData {
                /** CtwaContextLinkData context. */
                context;
                /** CtwaContextLinkData sourceUrl. */
                sourceUrl;
                /** CtwaContextLinkData icebreaker. */
                icebreaker;
                /** CtwaContextLinkData phone. */
                phone;
            }
        })(DraftMessage || (DraftMessage = {}));
    })(ChatRowOpaqueData || (ChatRowOpaqueData = {}));
    /** Represents a Citation. */
    class Citation {
        /** Citation title. */
        title;
        /** Citation subtitle. */
        subtitle;
        /** Citation cmsId. */
        cmsId;
        /** Citation imageUrl. */
        imageUrl;
    }
    /** Represents a ClientPairingProps. */
    class ClientPairingProps {
        /** ClientPairingProps isChatDbLidMigrated. */
        isChatDbLidMigrated;
        /** ClientPairingProps isSyncdPureLidSession. */
        isSyncdPureLidSession;
    }
    /** Represents a ClientPayload. */
    class ClientPayload {
        /** ClientPayload username. */
        username;
        /** ClientPayload passive. */
        passive;
        /** ClientPayload userAgent. */
        userAgent;
        /** ClientPayload webInfo. */
        webInfo;
        /** ClientPayload pushName. */
        pushName;
        /** ClientPayload sessionId. */
        sessionId;
        /** ClientPayload shortConnect. */
        shortConnect;
        /** ClientPayload connectType. */
        connectType;
        /** ClientPayload connectReason. */
        connectReason;
        /** ClientPayload shards. */
        shards;
        /** ClientPayload dnsSource. */
        dnsSource;
        /** ClientPayload connectAttemptCount. */
        connectAttemptCount;
        /** ClientPayload device. */
        device;
        /** ClientPayload devicePairingData. */
        devicePairingData;
        /** ClientPayload product. */
        product;
        /** ClientPayload fbCat. */
        fbCat;
        /** ClientPayload fbUserAgent. */
        fbUserAgent;
        /** ClientPayload oc. */
        oc;
        /** ClientPayload lc. */
        lc;
        /** ClientPayload iosAppExtension. */
        iosAppExtension;
        /** ClientPayload fbAppId. */
        fbAppId;
        /** ClientPayload fbDeviceId. */
        fbDeviceId;
        /** ClientPayload pull. */
        pull;
        /** ClientPayload paddingBytes. */
        paddingBytes;
        /** ClientPayload yearClass. */
        yearClass;
        /** ClientPayload memClass. */
        memClass;
        /** ClientPayload interopData. */
        interopData;
        /** ClientPayload trafficAnonymization. */
        trafficAnonymization;
        /** ClientPayload lidDbMigrated. */
        lidDbMigrated;
        /** ClientPayload accountType. */
        accountType;
    }
    (function (ClientPayload) {
        /** AccountType enum. */
        let AccountType;
        (function (AccountType) {
            AccountType[AccountType["DEFAULT"] = 0] = "DEFAULT";
            AccountType[AccountType["GUEST"] = 1] = "GUEST";
        })(AccountType || (AccountType = {}));
        /** ConnectReason enum. */
        let ConnectReason;
        (function (ConnectReason) {
            ConnectReason[ConnectReason["PUSH"] = 0] = "PUSH";
            ConnectReason[ConnectReason["USER_ACTIVATED"] = 1] = "USER_ACTIVATED";
            ConnectReason[ConnectReason["SCHEDULED"] = 2] = "SCHEDULED";
            ConnectReason[ConnectReason["ERROR_RECONNECT"] = 3] = "ERROR_RECONNECT";
            ConnectReason[ConnectReason["NETWORK_SWITCH"] = 4] = "NETWORK_SWITCH";
            ConnectReason[ConnectReason["PING_RECONNECT"] = 5] = "PING_RECONNECT";
            ConnectReason[ConnectReason["UNKNOWN"] = 6] = "UNKNOWN";
        })(ConnectReason || (ConnectReason = {}));
        /** ConnectType enum. */
        let ConnectType;
        (function (ConnectType) {
            ConnectType[ConnectType["CELLULAR_UNKNOWN"] = 0] = "CELLULAR_UNKNOWN";
            ConnectType[ConnectType["WIFI_UNKNOWN"] = 1] = "WIFI_UNKNOWN";
            ConnectType[ConnectType["CELLULAR_EDGE"] = 100] = "CELLULAR_EDGE";
            ConnectType[ConnectType["CELLULAR_IDEN"] = 101] = "CELLULAR_IDEN";
            ConnectType[ConnectType["CELLULAR_UMTS"] = 102] = "CELLULAR_UMTS";
            ConnectType[ConnectType["CELLULAR_EVDO"] = 103] = "CELLULAR_EVDO";
            ConnectType[ConnectType["CELLULAR_GPRS"] = 104] = "CELLULAR_GPRS";
            ConnectType[ConnectType["CELLULAR_HSDPA"] = 105] = "CELLULAR_HSDPA";
            ConnectType[ConnectType["CELLULAR_HSUPA"] = 106] = "CELLULAR_HSUPA";
            ConnectType[ConnectType["CELLULAR_HSPA"] = 107] = "CELLULAR_HSPA";
            ConnectType[ConnectType["CELLULAR_CDMA"] = 108] = "CELLULAR_CDMA";
            ConnectType[ConnectType["CELLULAR_1XRTT"] = 109] = "CELLULAR_1XRTT";
            ConnectType[ConnectType["CELLULAR_EHRPD"] = 110] = "CELLULAR_EHRPD";
            ConnectType[ConnectType["CELLULAR_LTE"] = 111] = "CELLULAR_LTE";
            ConnectType[ConnectType["CELLULAR_HSPAP"] = 112] = "CELLULAR_HSPAP";
        })(ConnectType || (ConnectType = {}));
        /** Represents a DNSSource. */
        class DNSSource {
            /** DNSSource dnsMethod. */
            dnsMethod;
            /** DNSSource appCached. */
            appCached;
        }
        (function (DNSSource) {
            /** DNSResolutionMethod enum. */
            let DNSResolutionMethod;
            (function (DNSResolutionMethod) {
                DNSResolutionMethod[DNSResolutionMethod["SYSTEM"] = 0] = "SYSTEM";
                DNSResolutionMethod[DNSResolutionMethod["GOOGLE"] = 1] = "GOOGLE";
                DNSResolutionMethod[DNSResolutionMethod["HARDCODED"] = 2] = "HARDCODED";
                DNSResolutionMethod[DNSResolutionMethod["OVERRIDE"] = 3] = "OVERRIDE";
                DNSResolutionMethod[DNSResolutionMethod["FALLBACK"] = 4] = "FALLBACK";
                DNSResolutionMethod[DNSResolutionMethod["MNS"] = 5] = "MNS";
            })(DNSResolutionMethod || (DNSResolutionMethod = {}));
        })(DNSSource || (DNSSource = {}));
        /** Represents a DevicePairingRegistrationData. */
        class DevicePairingRegistrationData {
            /** DevicePairingRegistrationData eRegid. */
            eRegid;
            /** DevicePairingRegistrationData eKeytype. */
            eKeytype;
            /** DevicePairingRegistrationData eIdent. */
            eIdent;
            /** DevicePairingRegistrationData eSkeyId. */
            eSkeyId;
            /** DevicePairingRegistrationData eSkeyVal. */
            eSkeyVal;
            /** DevicePairingRegistrationData eSkeySig. */
            eSkeySig;
            /** DevicePairingRegistrationData buildHash. */
            buildHash;
            /** DevicePairingRegistrationData deviceProps. */
            deviceProps;
        }
        /** IOSAppExtension enum. */
        let IOSAppExtension;
        (function (IOSAppExtension) {
            IOSAppExtension[IOSAppExtension["SHARE_EXTENSION"] = 0] = "SHARE_EXTENSION";
            IOSAppExtension[IOSAppExtension["SERVICE_EXTENSION"] = 1] = "SERVICE_EXTENSION";
            IOSAppExtension[IOSAppExtension["INTENTS_EXTENSION"] = 2] = "INTENTS_EXTENSION";
        })(IOSAppExtension || (IOSAppExtension = {}));
        /** Represents an InteropData. */
        class InteropData {
            /** InteropData accountId. */
            accountId;
            /** InteropData token. */
            token;
            /** InteropData enableReadReceipts. */
            enableReadReceipts;
        }
        /** Product enum. */
        let Product;
        (function (Product) {
            Product[Product["WHATSAPP"] = 0] = "WHATSAPP";
            Product[Product["MESSENGER"] = 1] = "MESSENGER";
            Product[Product["INTEROP"] = 2] = "INTEROP";
            Product[Product["INTEROP_MSGR"] = 3] = "INTEROP_MSGR";
            Product[Product["WHATSAPP_LID"] = 4] = "WHATSAPP_LID";
        })(Product || (Product = {}));
        /** TrafficAnonymization enum. */
        let TrafficAnonymization;
        (function (TrafficAnonymization) {
            TrafficAnonymization[TrafficAnonymization["OFF"] = 0] = "OFF";
            TrafficAnonymization[TrafficAnonymization["STANDARD"] = 1] = "STANDARD";
        })(TrafficAnonymization || (TrafficAnonymization = {}));
        /** Represents a UserAgent. */
        class UserAgent {
            /** UserAgent platform. */
            platform;
            /** UserAgent appVersion. */
            appVersion;
            /** UserAgent mcc. */
            mcc;
            /** UserAgent mnc. */
            mnc;
            /** UserAgent osVersion. */
            osVersion;
            /** UserAgent manufacturer. */
            manufacturer;
            /** UserAgent device. */
            device;
            /** UserAgent osBuildNumber. */
            osBuildNumber;
            /** UserAgent phoneId. */
            phoneId;
            /** UserAgent releaseChannel. */
            releaseChannel;
            /** UserAgent localeLanguageIso6391. */
            localeLanguageIso6391;
            /** UserAgent localeCountryIso31661Alpha2. */
            localeCountryIso31661Alpha2;
            /** UserAgent deviceBoard. */
            deviceBoard;
            /** UserAgent deviceExpId. */
            deviceExpId;
            /** UserAgent deviceType. */
            deviceType;
            /** UserAgent deviceModelType. */
            deviceModelType;
        }
        (function (UserAgent) {
            /** Represents an AppVersion. */
            class AppVersion {
                /** AppVersion primary. */
                primary;
                /** AppVersion secondary. */
                secondary;
                /** AppVersion tertiary. */
                tertiary;
                /** AppVersion quaternary. */
                quaternary;
                /** AppVersion quinary. */
                quinary;
            }
            /** DeviceType enum. */
            let DeviceType;
            (function (DeviceType) {
                DeviceType[DeviceType["PHONE"] = 0] = "PHONE";
                DeviceType[DeviceType["TABLET"] = 1] = "TABLET";
                DeviceType[DeviceType["DESKTOP"] = 2] = "DESKTOP";
                DeviceType[DeviceType["WEARABLE"] = 3] = "WEARABLE";
                DeviceType[DeviceType["VR"] = 4] = "VR";
            })(DeviceType || (DeviceType = {}));
            /** Platform enum. */
            let Platform;
            (function (Platform) {
                Platform[Platform["ANDROID"] = 0] = "ANDROID";
                Platform[Platform["IOS"] = 1] = "IOS";
                Platform[Platform["WINDOWS_PHONE"] = 2] = "WINDOWS_PHONE";
                Platform[Platform["BLACKBERRY"] = 3] = "BLACKBERRY";
                Platform[Platform["BLACKBERRYX"] = 4] = "BLACKBERRYX";
                Platform[Platform["S40"] = 5] = "S40";
                Platform[Platform["S60"] = 6] = "S60";
                Platform[Platform["PYTHON_CLIENT"] = 7] = "PYTHON_CLIENT";
                Platform[Platform["TIZEN"] = 8] = "TIZEN";
                Platform[Platform["ENTERPRISE"] = 9] = "ENTERPRISE";
                Platform[Platform["SMB_ANDROID"] = 10] = "SMB_ANDROID";
                Platform[Platform["KAIOS"] = 11] = "KAIOS";
                Platform[Platform["SMB_IOS"] = 12] = "SMB_IOS";
                Platform[Platform["WINDOWS"] = 13] = "WINDOWS";
                Platform[Platform["WEB"] = 14] = "WEB";
                Platform[Platform["PORTAL"] = 15] = "PORTAL";
                Platform[Platform["GREEN_ANDROID"] = 16] = "GREEN_ANDROID";
                Platform[Platform["GREEN_IPHONE"] = 17] = "GREEN_IPHONE";
                Platform[Platform["BLUE_ANDROID"] = 18] = "BLUE_ANDROID";
                Platform[Platform["BLUE_IPHONE"] = 19] = "BLUE_IPHONE";
                Platform[Platform["FBLITE_ANDROID"] = 20] = "FBLITE_ANDROID";
                Platform[Platform["MLITE_ANDROID"] = 21] = "MLITE_ANDROID";
                Platform[Platform["IGLITE_ANDROID"] = 22] = "IGLITE_ANDROID";
                Platform[Platform["PAGE"] = 23] = "PAGE";
                Platform[Platform["MACOS"] = 24] = "MACOS";
                Platform[Platform["OCULUS_MSG"] = 25] = "OCULUS_MSG";
                Platform[Platform["OCULUS_CALL"] = 26] = "OCULUS_CALL";
                Platform[Platform["MILAN"] = 27] = "MILAN";
                Platform[Platform["CAPI"] = 28] = "CAPI";
                Platform[Platform["WEAROS"] = 29] = "WEAROS";
                Platform[Platform["ARDEVICE"] = 30] = "ARDEVICE";
                Platform[Platform["VRDEVICE"] = 31] = "VRDEVICE";
                Platform[Platform["BLUE_WEB"] = 32] = "BLUE_WEB";
                Platform[Platform["IPAD"] = 33] = "IPAD";
                Platform[Platform["TEST"] = 34] = "TEST";
                Platform[Platform["SMART_GLASSES"] = 35] = "SMART_GLASSES";
            })(Platform || (Platform = {}));
            /** ReleaseChannel enum. */
            let ReleaseChannel;
            (function (ReleaseChannel) {
                ReleaseChannel[ReleaseChannel["RELEASE"] = 0] = "RELEASE";
                ReleaseChannel[ReleaseChannel["BETA"] = 1] = "BETA";
                ReleaseChannel[ReleaseChannel["ALPHA"] = 2] = "ALPHA";
                ReleaseChannel[ReleaseChannel["DEBUG"] = 3] = "DEBUG";
            })(ReleaseChannel || (ReleaseChannel = {}));
        })(UserAgent || (UserAgent = {}));
        /** Represents a WebInfo. */
        class WebInfo {
            /** WebInfo refToken. */
            refToken;
            /** WebInfo version. */
            version;
            /** WebInfo webdPayload. */
            webdPayload;
            /** WebInfo webSubPlatform. */
            webSubPlatform;
        }
        (function (WebInfo) {
            /** WebSubPlatform enum. */
            let WebSubPlatform;
            (function (WebSubPlatform) {
                WebSubPlatform[WebSubPlatform["WEB_BROWSER"] = 0] = "WEB_BROWSER";
                WebSubPlatform[WebSubPlatform["APP_STORE"] = 1] = "APP_STORE";
                WebSubPlatform[WebSubPlatform["WIN_STORE"] = 2] = "WIN_STORE";
                WebSubPlatform[WebSubPlatform["DARWIN"] = 3] = "DARWIN";
                WebSubPlatform[WebSubPlatform["WIN32"] = 4] = "WIN32";
                WebSubPlatform[WebSubPlatform["WIN_HYBRID"] = 5] = "WIN_HYBRID";
            })(WebSubPlatform || (WebSubPlatform = {}));
            /** Represents a WebdPayload. */
            class WebdPayload {
                /** WebdPayload usesParticipantInKey. */
                usesParticipantInKey;
                /** WebdPayload supportsStarredMessages. */
                supportsStarredMessages;
                /** WebdPayload supportsDocumentMessages. */
                supportsDocumentMessages;
                /** WebdPayload supportsUrlMessages. */
                supportsUrlMessages;
                /** WebdPayload supportsMediaRetry. */
                supportsMediaRetry;
                /** WebdPayload supportsE2EImage. */
                supportsE2EImage;
                /** WebdPayload supportsE2EVideo. */
                supportsE2EVideo;
                /** WebdPayload supportsE2EAudio. */
                supportsE2EAudio;
                /** WebdPayload supportsE2EDocument. */
                supportsE2EDocument;
                /** WebdPayload documentTypes. */
                documentTypes;
                /** WebdPayload features. */
                features;
            }
        })(WebInfo || (WebInfo = {}));
    })(ClientPayload || (ClientPayload = {}));
    /** Represents a CommentMetadata. */
    class CommentMetadata {
        /** CommentMetadata commentParentKey. */
        commentParentKey;
        /** CommentMetadata replyCount. */
        replyCount;
    }
    /** Represents a CompanionCommitment. */
    class CompanionCommitment {
        /** CompanionCommitment hash. */
        hash;
    }
    /** Represents a CompanionEphemeralIdentity. */
    class CompanionEphemeralIdentity {
        /** CompanionEphemeralIdentity publicKey. */
        publicKey;
        /** CompanionEphemeralIdentity deviceType. */
        deviceType;
        /** CompanionEphemeralIdentity ref. */
        ref;
    }
    /** Represents a Config. */
    class Config {
        /** Config field. */
        field;
        /** Config version. */
        version;
    }
    /** Represents a ContextInfo. */
    class ContextInfo {
        /** ContextInfo stanzaId. */
        stanzaId;
        /** ContextInfo participant. */
        participant;
        /** ContextInfo quotedMessage. */
        quotedMessage;
        /** ContextInfo remoteJid. */
        remoteJid;
        /** ContextInfo mentionedJid. */
        mentionedJid;
        /** ContextInfo conversionSource. */
        conversionSource;
        /** ContextInfo conversionData. */
        conversionData;
        /** ContextInfo conversionDelaySeconds. */
        conversionDelaySeconds;
        /** ContextInfo forwardingScore. */
        forwardingScore;
        /** ContextInfo isForwarded. */
        isForwarded;
        /** ContextInfo quotedAd. */
        quotedAd;
        /** ContextInfo placeholderKey. */
        placeholderKey;
        /** ContextInfo expiration. */
        expiration;
        /** ContextInfo ephemeralSettingTimestamp. */
        ephemeralSettingTimestamp;
        /** ContextInfo ephemeralSharedSecret. */
        ephemeralSharedSecret;
        /** ContextInfo externalAdReply. */
        externalAdReply;
        /** ContextInfo entryPointConversionSource. */
        entryPointConversionSource;
        /** ContextInfo entryPointConversionApp. */
        entryPointConversionApp;
        /** ContextInfo entryPointConversionDelaySeconds. */
        entryPointConversionDelaySeconds;
        /** ContextInfo disappearingMode. */
        disappearingMode;
        /** ContextInfo actionLink. */
        actionLink;
        /** ContextInfo groupSubject. */
        groupSubject;
        /** ContextInfo parentGroupJid. */
        parentGroupJid;
        /** ContextInfo trustBannerType. */
        trustBannerType;
        /** ContextInfo trustBannerAction. */
        trustBannerAction;
        /** ContextInfo isSampled. */
        isSampled;
        /** ContextInfo groupMentions. */
        groupMentions;
        /** ContextInfo utm. */
        utm;
        /** ContextInfo forwardedNewsletterMessageInfo. */
        forwardedNewsletterMessageInfo;
        /** ContextInfo businessMessageForwardInfo. */
        businessMessageForwardInfo;
        /** ContextInfo smbClientCampaignId. */
        smbClientCampaignId;
        /** ContextInfo smbServerCampaignId. */
        smbServerCampaignId;
        /** ContextInfo dataSharingContext. */
        dataSharingContext;
        /** ContextInfo alwaysShowAdAttribution. */
        alwaysShowAdAttribution;
        /** ContextInfo featureEligibilities. */
        featureEligibilities;
        /** ContextInfo entryPointConversionExternalSource. */
        entryPointConversionExternalSource;
        /** ContextInfo entryPointConversionExternalMedium. */
        entryPointConversionExternalMedium;
        /** ContextInfo ctwaSignals. */
        ctwaSignals;
        /** ContextInfo ctwaPayload. */
        ctwaPayload;
        /** ContextInfo forwardedAiBotMessageInfo. */
        forwardedAiBotMessageInfo;
        /** ContextInfo statusAttributionType. */
        statusAttributionType;
        /** ContextInfo urlTrackingMap. */
        urlTrackingMap;
        /** ContextInfo pairedMediaType. */
        pairedMediaType;
        /** ContextInfo rankingVersion. */
        rankingVersion;
        /** ContextInfo memberLabel. */
        memberLabel;
        /** ContextInfo isQuestion. */
        isQuestion;
        /** ContextInfo statusSourceType. */
        statusSourceType;
    }
    (function (ContextInfo) {
        /** Represents an AdReplyInfo. */
        class AdReplyInfo {
            /** AdReplyInfo advertiserName. */
            advertiserName;
            /** AdReplyInfo mediaType. */
            mediaType;
            /** AdReplyInfo jpegThumbnail. */
            jpegThumbnail;
            /** AdReplyInfo caption. */
            caption;
        }
        (function (AdReplyInfo) {
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["NONE"] = 0] = "NONE";
                MediaType[MediaType["IMAGE"] = 1] = "IMAGE";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(AdReplyInfo || (AdReplyInfo = {}));
        /** Represents a BusinessMessageForwardInfo. */
        class BusinessMessageForwardInfo {
            /** BusinessMessageForwardInfo businessOwnerJid. */
            businessOwnerJid;
        }
        /** Represents a DataSharingContext. */
        class DataSharingContext {
            /** DataSharingContext showMmDisclosure. */
            showMmDisclosure;
            /** DataSharingContext encryptedSignalTokenConsented. */
            encryptedSignalTokenConsented;
            /** DataSharingContext parameters. */
            parameters;
        }
        (function (DataSharingContext) {
            /** Represents a Parameters. */
            class Parameters {
                /** Parameters key. */
                key;
                /** Parameters stringData. */
                stringData;
                /** Parameters intData. */
                intData;
                /** Parameters floatData. */
                floatData;
                /** Parameters contents. */
                contents;
            }
        })(DataSharingContext || (DataSharingContext = {}));
        /** Represents an ExternalAdReplyInfo. */
        class ExternalAdReplyInfo {
            /** ExternalAdReplyInfo title. */
            title;
            /** ExternalAdReplyInfo body. */
            body;
            /** ExternalAdReplyInfo mediaType. */
            mediaType;
            /** ExternalAdReplyInfo thumbnailUrl. */
            thumbnailUrl;
            /** ExternalAdReplyInfo mediaUrl. */
            mediaUrl;
            /** ExternalAdReplyInfo thumbnail. */
            thumbnail;
            /** ExternalAdReplyInfo sourceType. */
            sourceType;
            /** ExternalAdReplyInfo sourceId. */
            sourceId;
            /** ExternalAdReplyInfo sourceUrl. */
            sourceUrl;
            /** ExternalAdReplyInfo containsAutoReply. */
            containsAutoReply;
            /** ExternalAdReplyInfo renderLargerThumbnail. */
            renderLargerThumbnail;
            /** ExternalAdReplyInfo showAdAttribution. */
            showAdAttribution;
            /** ExternalAdReplyInfo ctwaClid. */
            ctwaClid;
            /** ExternalAdReplyInfo ref. */
            ref;
            /** ExternalAdReplyInfo clickToWhatsappCall. */
            clickToWhatsappCall;
            /** ExternalAdReplyInfo adContextPreviewDismissed. */
            adContextPreviewDismissed;
            /** ExternalAdReplyInfo sourceApp. */
            sourceApp;
            /** ExternalAdReplyInfo automatedGreetingMessageShown. */
            automatedGreetingMessageShown;
            /** ExternalAdReplyInfo greetingMessageBody. */
            greetingMessageBody;
            /** ExternalAdReplyInfo ctaPayload. */
            ctaPayload;
            /** ExternalAdReplyInfo disableNudge. */
            disableNudge;
            /** ExternalAdReplyInfo originalImageUrl. */
            originalImageUrl;
            /** ExternalAdReplyInfo automatedGreetingMessageCtaType. */
            automatedGreetingMessageCtaType;
            /** ExternalAdReplyInfo wtwaAdFormat. */
            wtwaAdFormat;
            /** ExternalAdReplyInfo adType. */
            adType;
        }
        (function (ExternalAdReplyInfo) {
            /** AdType enum. */
            let AdType;
            (function (AdType) {
                AdType[AdType["CTWA"] = 0] = "CTWA";
                AdType[AdType["CAWC"] = 1] = "CAWC";
            })(AdType || (AdType = {}));
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["NONE"] = 0] = "NONE";
                MediaType[MediaType["IMAGE"] = 1] = "IMAGE";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(ExternalAdReplyInfo || (ExternalAdReplyInfo = {}));
        /** Represents a FeatureEligibilities. */
        class FeatureEligibilities {
            /** FeatureEligibilities cannotBeReactedTo. */
            cannotBeReactedTo;
            /** FeatureEligibilities cannotBeRanked. */
            cannotBeRanked;
            /** FeatureEligibilities canRequestFeedback. */
            canRequestFeedback;
            /** FeatureEligibilities canBeReshared. */
            canBeReshared;
        }
        /** Represents a ForwardedAIBotMessageInfo. */
        class ForwardedAIBotMessageInfo {
            /** ForwardedAIBotMessageInfo botName. */
            botName;
            /** ForwardedAIBotMessageInfo botJid. */
            botJid;
            /** ForwardedAIBotMessageInfo creatorName. */
            creatorName;
        }
        /** Represents a ForwardedNewsletterMessageInfo. */
        class ForwardedNewsletterMessageInfo {
            /** ForwardedNewsletterMessageInfo newsletterJid. */
            newsletterJid;
            /** ForwardedNewsletterMessageInfo serverMessageId. */
            serverMessageId;
            /** ForwardedNewsletterMessageInfo newsletterName. */
            newsletterName;
            /** ForwardedNewsletterMessageInfo contentType. */
            contentType;
            /** ForwardedNewsletterMessageInfo accessibilityText. */
            accessibilityText;
        }
        (function (ForwardedNewsletterMessageInfo) {
            /** ContentType enum. */
            let ContentType;
            (function (ContentType) {
                ContentType[ContentType["UPDATE"] = 1] = "UPDATE";
                ContentType[ContentType["UPDATE_CARD"] = 2] = "UPDATE_CARD";
                ContentType[ContentType["LINK_CARD"] = 3] = "LINK_CARD";
            })(ContentType || (ContentType = {}));
        })(ForwardedNewsletterMessageInfo || (ForwardedNewsletterMessageInfo = {}));
        /** PairedMediaType enum. */
        let PairedMediaType;
        (function (PairedMediaType) {
            PairedMediaType[PairedMediaType["NOT_PAIRED_MEDIA"] = 0] = "NOT_PAIRED_MEDIA";
            PairedMediaType[PairedMediaType["SD_VIDEO_PARENT"] = 1] = "SD_VIDEO_PARENT";
            PairedMediaType[PairedMediaType["HD_VIDEO_CHILD"] = 2] = "HD_VIDEO_CHILD";
            PairedMediaType[PairedMediaType["SD_IMAGE_PARENT"] = 3] = "SD_IMAGE_PARENT";
            PairedMediaType[PairedMediaType["HD_IMAGE_CHILD"] = 4] = "HD_IMAGE_CHILD";
            PairedMediaType[PairedMediaType["MOTION_PHOTO_PARENT"] = 5] = "MOTION_PHOTO_PARENT";
            PairedMediaType[PairedMediaType["MOTION_PHOTO_CHILD"] = 6] = "MOTION_PHOTO_CHILD";
        })(PairedMediaType || (PairedMediaType = {}));
        /** StatusAttributionType enum. */
        let StatusAttributionType;
        (function (StatusAttributionType) {
            StatusAttributionType[StatusAttributionType["NONE"] = 0] = "NONE";
            StatusAttributionType[StatusAttributionType["RESHARED_FROM_MENTION"] = 1] = "RESHARED_FROM_MENTION";
            StatusAttributionType[StatusAttributionType["RESHARED_FROM_POST"] = 2] = "RESHARED_FROM_POST";
        })(StatusAttributionType || (StatusAttributionType = {}));
        /** StatusSourceType enum. */
        let StatusSourceType;
        (function (StatusSourceType) {
            StatusSourceType[StatusSourceType["IMAGE"] = 0] = "IMAGE";
            StatusSourceType[StatusSourceType["VIDEO"] = 1] = "VIDEO";
            StatusSourceType[StatusSourceType["GIF"] = 2] = "GIF";
            StatusSourceType[StatusSourceType["AUDIO"] = 3] = "AUDIO";
            StatusSourceType[StatusSourceType["TEXT"] = 4] = "TEXT";
            StatusSourceType[StatusSourceType["MUSIC_STANDALONE"] = 5] = "MUSIC_STANDALONE";
        })(StatusSourceType || (StatusSourceType = {}));
        /** Represents a UTMInfo. */
        class UTMInfo {
            /** UTMInfo utmSource. */
            utmSource;
            /** UTMInfo utmCampaign. */
            utmCampaign;
        }
    })(ContextInfo || (ContextInfo = {}));
    /** Represents a Conversation. */
    class Conversation {
        /** Conversation id. */
        id;
        /** Conversation messages. */
        messages;
        /** Conversation newJid. */
        newJid;
        /** Conversation oldJid. */
        oldJid;
        /** Conversation lastMsgTimestamp. */
        lastMsgTimestamp;
        /** Conversation unreadCount. */
        unreadCount;
        /** Conversation readOnly. */
        readOnly;
        /** Conversation endOfHistoryTransfer. */
        endOfHistoryTransfer;
        /** Conversation ephemeralExpiration. */
        ephemeralExpiration;
        /** Conversation ephemeralSettingTimestamp. */
        ephemeralSettingTimestamp;
        /** Conversation endOfHistoryTransferType. */
        endOfHistoryTransferType;
        /** Conversation conversationTimestamp. */
        conversationTimestamp;
        /** Conversation name. */
        name;
        /** Conversation pHash. */
        pHash;
        /** Conversation notSpam. */
        notSpam;
        /** Conversation archived. */
        archived;
        /** Conversation disappearingMode. */
        disappearingMode;
        /** Conversation unreadMentionCount. */
        unreadMentionCount;
        /** Conversation markedAsUnread. */
        markedAsUnread;
        /** Conversation participant. */
        participant;
        /** Conversation tcToken. */
        tcToken;
        /** Conversation tcTokenTimestamp. */
        tcTokenTimestamp;
        /** Conversation contactPrimaryIdentityKey. */
        contactPrimaryIdentityKey;
        /** Conversation pinned. */
        pinned;
        /** Conversation muteEndTime. */
        muteEndTime;
        /** Conversation wallpaper. */
        wallpaper;
        /** Conversation mediaVisibility. */
        mediaVisibility;
        /** Conversation tcTokenSenderTimestamp. */
        tcTokenSenderTimestamp;
        /** Conversation suspended. */
        suspended;
        /** Conversation terminated. */
        terminated;
        /** Conversation createdAt. */
        createdAt;
        /** Conversation createdBy. */
        createdBy;
        /** Conversation description. */
        description;
        /** Conversation support. */
        support;
        /** Conversation isParentGroup. */
        isParentGroup;
        /** Conversation parentGroupId. */
        parentGroupId;
        /** Conversation isDefaultSubgroup. */
        isDefaultSubgroup;
        /** Conversation displayName. */
        displayName;
        /** Conversation pnJid. */
        pnJid;
        /** Conversation shareOwnPn. */
        shareOwnPn;
        /** Conversation pnhDuplicateLidThread. */
        pnhDuplicateLidThread;
        /** Conversation lidJid. */
        lidJid;
        /** Conversation username. */
        username;
        /** Conversation lidOriginType. */
        lidOriginType;
        /** Conversation commentsCount. */
        commentsCount;
        /** Conversation locked. */
        locked;
        /** Conversation systemMessageToInsert. */
        systemMessageToInsert;
        /** Conversation capiCreatedGroup. */
        capiCreatedGroup;
        /** Conversation accountLid. */
        accountLid;
        /** Conversation limitSharing. */
        limitSharing;
        /** Conversation limitSharingSettingTimestamp. */
        limitSharingSettingTimestamp;
        /** Conversation limitSharingTrigger. */
        limitSharingTrigger;
        /** Conversation limitSharingInitiatedByMe. */
        limitSharingInitiatedByMe;
    }
    (function (Conversation) {
        /** EndOfHistoryTransferType enum. */
        let EndOfHistoryTransferType;
        (function (EndOfHistoryTransferType) {
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY"] = 0] = "COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY";
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY"] = 1] = "COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY";
            EndOfHistoryTransferType[EndOfHistoryTransferType["COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY"] = 2] = "COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY";
        })(EndOfHistoryTransferType || (EndOfHistoryTransferType = {}));
    })(Conversation || (Conversation = {}));
    /** Represents a DeviceCapabilities. */
    class DeviceCapabilities {
        /** DeviceCapabilities chatLockSupportLevel. */
        chatLockSupportLevel;
        /** DeviceCapabilities lidMigration. */
        lidMigration;
    }
    (function (DeviceCapabilities) {
        /** ChatLockSupportLevel enum. */
        let ChatLockSupportLevel;
        (function (ChatLockSupportLevel) {
            ChatLockSupportLevel[ChatLockSupportLevel["NONE"] = 0] = "NONE";
            ChatLockSupportLevel[ChatLockSupportLevel["MINIMAL"] = 1] = "MINIMAL";
            ChatLockSupportLevel[ChatLockSupportLevel["FULL"] = 2] = "FULL";
        })(ChatLockSupportLevel || (ChatLockSupportLevel = {}));
        /** Represents a LIDMigration. */
        class LIDMigration {
            /** LIDMigration chatDbMigrationTimestamp. */
            chatDbMigrationTimestamp;
        }
    })(DeviceCapabilities || (DeviceCapabilities = {}));
    /** Represents a DeviceConsistencyCodeMessage. */
    class DeviceConsistencyCodeMessage {
        /** DeviceConsistencyCodeMessage generation. */
        generation;
        /** DeviceConsistencyCodeMessage signature. */
        signature;
    }
    /** Represents a DeviceListMetadata. */
    class DeviceListMetadata {
        /** DeviceListMetadata senderKeyHash. */
        senderKeyHash;
        /** DeviceListMetadata senderTimestamp. */
        senderTimestamp;
        /** DeviceListMetadata senderKeyIndexes. */
        senderKeyIndexes;
        /** DeviceListMetadata senderAccountType. */
        senderAccountType;
        /** DeviceListMetadata receiverAccountType. */
        receiverAccountType;
        /** DeviceListMetadata recipientKeyHash. */
        recipientKeyHash;
        /** DeviceListMetadata recipientTimestamp. */
        recipientTimestamp;
        /** DeviceListMetadata recipientKeyIndexes. */
        recipientKeyIndexes;
    }
    /** Represents a DeviceProps. */
    class DeviceProps {
        /** DeviceProps os. */
        os;
        /** DeviceProps version. */
        version;
        /** DeviceProps platformType. */
        platformType;
        /** DeviceProps requireFullSync. */
        requireFullSync;
        /** DeviceProps historySyncConfig. */
        historySyncConfig;
    }
    (function (DeviceProps) {
        /** Represents an AppVersion. */
        class AppVersion {
            /** AppVersion primary. */
            primary;
            /** AppVersion secondary. */
            secondary;
            /** AppVersion tertiary. */
            tertiary;
            /** AppVersion quaternary. */
            quaternary;
            /** AppVersion quinary. */
            quinary;
        }
        /** Represents a HistorySyncConfig. */
        class HistorySyncConfig {
            /** HistorySyncConfig fullSyncDaysLimit. */
            fullSyncDaysLimit;
            /** HistorySyncConfig fullSyncSizeMbLimit. */
            fullSyncSizeMbLimit;
            /** HistorySyncConfig storageQuotaMb. */
            storageQuotaMb;
            /** HistorySyncConfig inlineInitialPayloadInE2EeMsg. */
            inlineInitialPayloadInE2EeMsg;
            /** HistorySyncConfig recentSyncDaysLimit. */
            recentSyncDaysLimit;
            /** HistorySyncConfig supportCallLogHistory. */
            supportCallLogHistory;
            /** HistorySyncConfig supportBotUserAgentChatHistory. */
            supportBotUserAgentChatHistory;
            /** HistorySyncConfig supportCagReactionsAndPolls. */
            supportCagReactionsAndPolls;
            /** HistorySyncConfig supportBizHostedMsg. */
            supportBizHostedMsg;
            /** HistorySyncConfig supportRecentSyncChunkMessageCountTuning. */
            supportRecentSyncChunkMessageCountTuning;
            /** HistorySyncConfig supportHostedGroupMsg. */
            supportHostedGroupMsg;
            /** HistorySyncConfig supportFbidBotChatHistory. */
            supportFbidBotChatHistory;
            /** HistorySyncConfig supportAddOnHistorySyncMigration. */
            supportAddOnHistorySyncMigration;
            /** HistorySyncConfig supportMessageAssociation. */
            supportMessageAssociation;
        }
        /** PlatformType enum. */
        let PlatformType;
        (function (PlatformType) {
            PlatformType[PlatformType["UNKNOWN"] = 0] = "UNKNOWN";
            PlatformType[PlatformType["CHROME"] = 1] = "CHROME";
            PlatformType[PlatformType["FIREFOX"] = 2] = "FIREFOX";
            PlatformType[PlatformType["IE"] = 3] = "IE";
            PlatformType[PlatformType["OPERA"] = 4] = "OPERA";
            PlatformType[PlatformType["SAFARI"] = 5] = "SAFARI";
            PlatformType[PlatformType["EDGE"] = 6] = "EDGE";
            PlatformType[PlatformType["DESKTOP"] = 7] = "DESKTOP";
            PlatformType[PlatformType["IPAD"] = 8] = "IPAD";
            PlatformType[PlatformType["ANDROID_TABLET"] = 9] = "ANDROID_TABLET";
            PlatformType[PlatformType["OHANA"] = 10] = "OHANA";
            PlatformType[PlatformType["ALOHA"] = 11] = "ALOHA";
            PlatformType[PlatformType["CATALINA"] = 12] = "CATALINA";
            PlatformType[PlatformType["TCL_TV"] = 13] = "TCL_TV";
            PlatformType[PlatformType["IOS_PHONE"] = 14] = "IOS_PHONE";
            PlatformType[PlatformType["IOS_CATALYST"] = 15] = "IOS_CATALYST";
            PlatformType[PlatformType["ANDROID_PHONE"] = 16] = "ANDROID_PHONE";
            PlatformType[PlatformType["ANDROID_AMBIGUOUS"] = 17] = "ANDROID_AMBIGUOUS";
            PlatformType[PlatformType["WEAR_OS"] = 18] = "WEAR_OS";
            PlatformType[PlatformType["AR_WRIST"] = 19] = "AR_WRIST";
            PlatformType[PlatformType["AR_DEVICE"] = 20] = "AR_DEVICE";
            PlatformType[PlatformType["UWP"] = 21] = "UWP";
            PlatformType[PlatformType["VR"] = 22] = "VR";
            PlatformType[PlatformType["CLOUD_API"] = 23] = "CLOUD_API";
            PlatformType[PlatformType["SMARTGLASSES"] = 24] = "SMARTGLASSES";
        })(PlatformType || (PlatformType = {}));
    })(DeviceProps || (DeviceProps = {}));
    /** Represents a DisappearingMode. */
    class DisappearingMode {
        /** DisappearingMode initiator. */
        initiator;
        /** DisappearingMode trigger. */
        trigger;
        /** DisappearingMode initiatorDeviceJid. */
        initiatorDeviceJid;
        /** DisappearingMode initiatedByMe. */
        initiatedByMe;
    }
    (function (DisappearingMode) {
        /** Initiator enum. */
        let Initiator;
        (function (Initiator) {
            Initiator[Initiator["CHANGED_IN_CHAT"] = 0] = "CHANGED_IN_CHAT";
            Initiator[Initiator["INITIATED_BY_ME"] = 1] = "INITIATED_BY_ME";
            Initiator[Initiator["INITIATED_BY_OTHER"] = 2] = "INITIATED_BY_OTHER";
            Initiator[Initiator["BIZ_UPGRADE_FB_HOSTING"] = 3] = "BIZ_UPGRADE_FB_HOSTING";
        })(Initiator || (Initiator = {}));
        /** Trigger enum. */
        let Trigger;
        (function (Trigger) {
            Trigger[Trigger["UNKNOWN"] = 0] = "UNKNOWN";
            Trigger[Trigger["CHAT_SETTING"] = 1] = "CHAT_SETTING";
            Trigger[Trigger["ACCOUNT_SETTING"] = 2] = "ACCOUNT_SETTING";
            Trigger[Trigger["BULK_CHANGE"] = 3] = "BULK_CHANGE";
            Trigger[Trigger["BIZ_SUPPORTS_FB_HOSTING"] = 4] = "BIZ_SUPPORTS_FB_HOSTING";
            Trigger[Trigger["UNKNOWN_GROUPS"] = 5] = "UNKNOWN_GROUPS";
        })(Trigger || (Trigger = {}));
    })(DisappearingMode || (DisappearingMode = {}));
    /** Represents an EmbeddedContent. */
    class EmbeddedContent {
        /** EmbeddedContent embeddedMessage. */
        embeddedMessage;
        /** EmbeddedContent embeddedMusic. */
        embeddedMusic;
        /** EmbeddedContent content. */
        content;
    }
    /** Represents an EmbeddedMessage. */
    class EmbeddedMessage {
        /** EmbeddedMessage stanzaId. */
        stanzaId;
        /** EmbeddedMessage message. */
        message;
    }
    /** Represents an EmbeddedMusic. */
    class EmbeddedMusic {
        /** EmbeddedMusic musicContentMediaId. */
        musicContentMediaId;
        /** EmbeddedMusic songId. */
        songId;
        /** EmbeddedMusic author. */
        author;
        /** EmbeddedMusic title. */
        title;
        /** EmbeddedMusic artworkDirectPath. */
        artworkDirectPath;
        /** EmbeddedMusic artworkSha256. */
        artworkSha256;
        /** EmbeddedMusic artworkEncSha256. */
        artworkEncSha256;
        /** EmbeddedMusic artworkMediaKey. */
        artworkMediaKey;
        /** EmbeddedMusic artistAttribution. */
        artistAttribution;
        /** EmbeddedMusic countryBlocklist. */
        countryBlocklist;
        /** EmbeddedMusic isExplicit. */
        isExplicit;
    }
    /** Represents an EncryptedPairingRequest. */
    class EncryptedPairingRequest {
        /** EncryptedPairingRequest encryptedPayload. */
        encryptedPayload;
        /** EncryptedPairingRequest iv. */
        iv;
    }
    /** Represents an EphemeralSetting. */
    class EphemeralSetting {
        /** EphemeralSetting duration. */
        duration;
        /** EphemeralSetting timestamp. */
        timestamp;
    }
    /** Represents an EventAdditionalMetadata. */
    class EventAdditionalMetadata {
        /** EventAdditionalMetadata isStale. */
        isStale;
    }
    /** Represents an EventResponse. */
    class EventResponse {
        /** EventResponse eventResponseMessageKey. */
        eventResponseMessageKey;
        /** EventResponse timestampMs. */
        timestampMs;
        /** EventResponse eventResponseMessage. */
        eventResponseMessage;
        /** EventResponse unread. */
        unread;
    }
    /** Represents an ExitCode. */
    class ExitCode {
        /** ExitCode code. */
        code;
        /** ExitCode text. */
        text;
    }
    /** Represents an ExternalBlobReference. */
    class ExternalBlobReference {
        /** ExternalBlobReference mediaKey. */
        mediaKey;
        /** ExternalBlobReference directPath. */
        directPath;
        /** ExternalBlobReference handle. */
        handle;
        /** ExternalBlobReference fileSizeBytes. */
        fileSizeBytes;
        /** ExternalBlobReference fileSha256. */
        fileSha256;
        /** ExternalBlobReference fileEncSha256. */
        fileEncSha256;
    }
    /** Represents a Field. */
    class Field {
        /** Field minVersion. */
        minVersion;
        /** Field maxVersion. */
        maxVersion;
        /** Field notReportableMinVersion. */
        notReportableMinVersion;
        /** Field isMessage. */
        isMessage;
        /** Field subfield. */
        subfield;
    }
    /** Represents a GlobalSettings. */
    class GlobalSettings {
        /** GlobalSettings lightThemeWallpaper. */
        lightThemeWallpaper;
        /** GlobalSettings mediaVisibility. */
        mediaVisibility;
        /** GlobalSettings darkThemeWallpaper. */
        darkThemeWallpaper;
        /** GlobalSettings autoDownloadWiFi. */
        autoDownloadWiFi;
        /** GlobalSettings autoDownloadCellular. */
        autoDownloadCellular;
        /** GlobalSettings autoDownloadRoaming. */
        autoDownloadRoaming;
        /** GlobalSettings showIndividualNotificationsPreview. */
        showIndividualNotificationsPreview;
        /** GlobalSettings showGroupNotificationsPreview. */
        showGroupNotificationsPreview;
        /** GlobalSettings disappearingModeDuration. */
        disappearingModeDuration;
        /** GlobalSettings disappearingModeTimestamp. */
        disappearingModeTimestamp;
        /** GlobalSettings avatarUserSettings. */
        avatarUserSettings;
        /** GlobalSettings fontSize. */
        fontSize;
        /** GlobalSettings securityNotifications. */
        securityNotifications;
        /** GlobalSettings autoUnarchiveChats. */
        autoUnarchiveChats;
        /** GlobalSettings videoQualityMode. */
        videoQualityMode;
        /** GlobalSettings photoQualityMode. */
        photoQualityMode;
        /** GlobalSettings individualNotificationSettings. */
        individualNotificationSettings;
        /** GlobalSettings groupNotificationSettings. */
        groupNotificationSettings;
        /** GlobalSettings chatLockSettings. */
        chatLockSettings;
        /** GlobalSettings chatDbLidMigrationTimestamp. */
        chatDbLidMigrationTimestamp;
    }
    /** Represents a GroupMention. */
    class GroupMention {
        /** GroupMention groupJid. */
        groupJid;
        /** GroupMention groupSubject. */
        groupSubject;
    }
    /** Represents a GroupParticipant. */
    class GroupParticipant {
        /** GroupParticipant userJid. */
        userJid;
        /** GroupParticipant rank. */
        rank;
    }
    (function (GroupParticipant) {
        /** Rank enum. */
        let Rank;
        (function (Rank) {
            Rank[Rank["REGULAR"] = 0] = "REGULAR";
            Rank[Rank["ADMIN"] = 1] = "ADMIN";
            Rank[Rank["SUPERADMIN"] = 2] = "SUPERADMIN";
        })(Rank || (Rank = {}));
    })(GroupParticipant || (GroupParticipant = {}));
    /** Represents a HandshakeMessage. */
    class HandshakeMessage {
        /** HandshakeMessage clientHello. */
        clientHello;
        /** HandshakeMessage serverHello. */
        serverHello;
        /** HandshakeMessage clientFinish. */
        clientFinish;
    }
    (function (HandshakeMessage) {
        /** Represents a ClientFinish. */
        class ClientFinish {
            /** ClientFinish static. */
            static;
            /** ClientFinish payload. */
            payload;
        }
        /** Represents a ClientHello. */
        class ClientHello {
            /** ClientHello ephemeral. */
            ephemeral;
            /** ClientHello static. */
            static;
            /** ClientHello payload. */
            payload;
        }
        /** Represents a ServerHello. */
        class ServerHello {
            /** ServerHello ephemeral. */
            ephemeral;
            /** ServerHello static. */
            static;
            /** ServerHello payload. */
            payload;
        }
    })(HandshakeMessage || (HandshakeMessage = {}));
    /** Represents a HistorySync. */
    class HistorySync {
        /** HistorySync syncType. */
        syncType;
        /** HistorySync conversations. */
        conversations;
        /** HistorySync statusV3Messages. */
        statusV3Messages;
        /** HistorySync chunkOrder. */
        chunkOrder;
        /** HistorySync progress. */
        progress;
        /** HistorySync pushnames. */
        pushnames;
        /** HistorySync globalSettings. */
        globalSettings;
        /** HistorySync threadIdUserSecret. */
        threadIdUserSecret;
        /** HistorySync threadDsTimeframeOffset. */
        threadDsTimeframeOffset;
        /** HistorySync recentStickers. */
        recentStickers;
        /** HistorySync pastParticipants. */
        pastParticipants;
        /** HistorySync callLogRecords. */
        callLogRecords;
        /** HistorySync aiWaitListState. */
        aiWaitListState;
        /** HistorySync phoneNumberToLidMappings. */
        phoneNumberToLidMappings;
        /** HistorySync companionMetaNonce. */
        companionMetaNonce;
        /** HistorySync shareableChatIdentifierEncryptionKey. */
        shareableChatIdentifierEncryptionKey;
        /** HistorySync accounts. */
        accounts;
    }
    (function (HistorySync) {
        /** BotAIWaitListState enum. */
        let BotAIWaitListState;
        (function (BotAIWaitListState) {
            BotAIWaitListState[BotAIWaitListState["IN_WAITLIST"] = 0] = "IN_WAITLIST";
            BotAIWaitListState[BotAIWaitListState["AI_AVAILABLE"] = 1] = "AI_AVAILABLE";
        })(BotAIWaitListState || (BotAIWaitListState = {}));
        /** HistorySyncType enum. */
        let HistorySyncType;
        (function (HistorySyncType) {
            HistorySyncType[HistorySyncType["INITIAL_BOOTSTRAP"] = 0] = "INITIAL_BOOTSTRAP";
            HistorySyncType[HistorySyncType["INITIAL_STATUS_V3"] = 1] = "INITIAL_STATUS_V3";
            HistorySyncType[HistorySyncType["FULL"] = 2] = "FULL";
            HistorySyncType[HistorySyncType["RECENT"] = 3] = "RECENT";
            HistorySyncType[HistorySyncType["PUSH_NAME"] = 4] = "PUSH_NAME";
            HistorySyncType[HistorySyncType["NON_BLOCKING_DATA"] = 5] = "NON_BLOCKING_DATA";
            HistorySyncType[HistorySyncType["ON_DEMAND"] = 6] = "ON_DEMAND";
        })(HistorySyncType || (HistorySyncType = {}));
    })(HistorySync || (HistorySync = {}));
    /** Represents a HistorySyncMsg. */
    class HistorySyncMsg {
        /** HistorySyncMsg message. */
        message;
        /** HistorySyncMsg msgOrderId. */
        msgOrderId;
    }
    /** Represents a HydratedTemplateButton. */
    class HydratedTemplateButton {
        /** HydratedTemplateButton index. */
        index;
        /** HydratedTemplateButton quickReplyButton. */
        quickReplyButton;
        /** HydratedTemplateButton urlButton. */
        urlButton;
        /** HydratedTemplateButton callButton. */
        callButton;
        /** HydratedTemplateButton hydratedButton. */
        hydratedButton;
    }
    (function (HydratedTemplateButton) {
        /** Represents a HydratedCallButton. */
        class HydratedCallButton {
            /** HydratedCallButton displayText. */
            displayText;
            /** HydratedCallButton phoneNumber. */
            phoneNumber;
        }
        /** Represents a HydratedQuickReplyButton. */
        class HydratedQuickReplyButton {
            /** HydratedQuickReplyButton displayText. */
            displayText;
            /** HydratedQuickReplyButton id. */
            id;
        }
        /** Represents a HydratedURLButton. */
        class HydratedURLButton {
            /** HydratedURLButton displayText. */
            displayText;
            /** HydratedURLButton url. */
            url;
            /** HydratedURLButton consentedUsersUrl. */
            consentedUsersUrl;
            /** HydratedURLButton webviewPresentation. */
            webviewPresentation;
        }
        (function (HydratedURLButton) {
            /** WebviewPresentationType enum. */
            let WebviewPresentationType;
            (function (WebviewPresentationType) {
                WebviewPresentationType[WebviewPresentationType["FULL"] = 1] = "FULL";
                WebviewPresentationType[WebviewPresentationType["TALL"] = 2] = "TALL";
                WebviewPresentationType[WebviewPresentationType["COMPACT"] = 3] = "COMPACT";
            })(WebviewPresentationType || (WebviewPresentationType = {}));
        })(HydratedURLButton || (HydratedURLButton = {}));
    })(HydratedTemplateButton || (HydratedTemplateButton = {}));
    /** Represents an IdentityKeyPairStructure. */
    class IdentityKeyPairStructure {
        /** IdentityKeyPairStructure publicKey. */
        publicKey;
        /** IdentityKeyPairStructure privateKey. */
        privateKey;
    }
    /** Represents an InteractiveAnnotation. */
    class InteractiveAnnotation {
        /** InteractiveAnnotation polygonVertices. */
        polygonVertices;
        /** InteractiveAnnotation shouldSkipConfirmation. */
        shouldSkipConfirmation;
        /** InteractiveAnnotation embeddedContent. */
        embeddedContent;
        /** InteractiveAnnotation statusLinkType. */
        statusLinkType;
        /** InteractiveAnnotation location. */
        location;
        /** InteractiveAnnotation newsletter. */
        newsletter;
        /** InteractiveAnnotation embeddedAction. */
        embeddedAction;
        /** InteractiveAnnotation tapAction. */
        tapAction;
        /** InteractiveAnnotation action. */
        action;
    }
    (function (InteractiveAnnotation) {
        /** StatusLinkType enum. */
        let StatusLinkType;
        (function (StatusLinkType) {
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_PREVIEW"] = 1] = "RASTERIZED_LINK_PREVIEW";
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_TRUNCATED"] = 2] = "RASTERIZED_LINK_TRUNCATED";
            StatusLinkType[StatusLinkType["RASTERIZED_LINK_FULL_URL"] = 3] = "RASTERIZED_LINK_FULL_URL";
        })(StatusLinkType || (StatusLinkType = {}));
    })(InteractiveAnnotation || (InteractiveAnnotation = {}));
    /** Represents a KeepInChat. */
    class KeepInChat {
        /** KeepInChat keepType. */
        keepType;
        /** KeepInChat serverTimestamp. */
        serverTimestamp;
        /** KeepInChat key. */
        key;
        /** KeepInChat deviceJid. */
        deviceJid;
        /** KeepInChat clientTimestampMs. */
        clientTimestampMs;
        /** KeepInChat serverTimestampMs. */
        serverTimestampMs;
    }
    /** KeepType enum. */
    let KeepType;
    (function (KeepType) {
        KeepType[KeepType["UNKNOWN"] = 0] = "UNKNOWN";
        KeepType[KeepType["KEEP_FOR_ALL"] = 1] = "KEEP_FOR_ALL";
        KeepType[KeepType["UNDO_KEEP_FOR_ALL"] = 2] = "UNDO_KEEP_FOR_ALL";
    })(KeepType || (KeepType = {}));
    /** Represents a KeyExchangeMessage. */
    class KeyExchangeMessage {
        /** KeyExchangeMessage id. */
        id;
        /** KeyExchangeMessage baseKey. */
        baseKey;
        /** KeyExchangeMessage ratchetKey. */
        ratchetKey;
        /** KeyExchangeMessage identityKey. */
        identityKey;
        /** KeyExchangeMessage baseKeySignature. */
        baseKeySignature;
    }
    /** Represents a KeyId. */
    class KeyId {
        /** KeyId id. */
        id;
    }
    /** Represents a LIDMigrationMapping. */
    class LIDMigrationMapping {
        /** LIDMigrationMapping pn. */
        pn;
        /** LIDMigrationMapping assignedLid. */
        assignedLid;
        /** LIDMigrationMapping latestLid. */
        latestLid;
    }
    /** Represents a LIDMigrationMappingSyncMessage. */
    class LIDMigrationMappingSyncMessage {
        /** LIDMigrationMappingSyncMessage encodedMappingPayload. */
        encodedMappingPayload;
    }
    /** Represents a LIDMigrationMappingSyncPayload. */
    class LIDMigrationMappingSyncPayload {
        /** LIDMigrationMappingSyncPayload pnToLidMappings. */
        pnToLidMappings;
        /** LIDMigrationMappingSyncPayload chatDbMigrationTimestamp. */
        chatDbMigrationTimestamp;
    }
    /** Represents a LegacyMessage. */
    class LegacyMessage {
        /** LegacyMessage eventResponseMessage. */
        eventResponseMessage;
        /** LegacyMessage pollVote. */
        pollVote;
    }
    /** Represents a LimitSharing. */
    class LimitSharing {
        /** LimitSharing sharingLimited. */
        sharingLimited;
        /** LimitSharing trigger. */
        trigger;
        /** LimitSharing limitSharingSettingTimestamp. */
        limitSharingSettingTimestamp;
        /** LimitSharing initiatedByMe. */
        initiatedByMe;
    }
    (function (LimitSharing) {
        /** TriggerType enum. */
        let TriggerType;
        (function (TriggerType) {
            TriggerType[TriggerType["UNKNOWN"] = 0] = "UNKNOWN";
            TriggerType[TriggerType["CHAT_SETTING"] = 1] = "CHAT_SETTING";
            TriggerType[TriggerType["BIZ_SUPPORTS_FB_HOSTING"] = 2] = "BIZ_SUPPORTS_FB_HOSTING";
            TriggerType[TriggerType["UNKNOWN_GROUP"] = 3] = "UNKNOWN_GROUP";
        })(TriggerType || (TriggerType = {}));
    })(LimitSharing || (LimitSharing = {}));
    /** Represents a LocalizedName. */
    class LocalizedName {
        /** LocalizedName lg. */
        lg;
        /** LocalizedName lc. */
        lc;
        /** LocalizedName verifiedName. */
        verifiedName;
    }
    /** Represents a Location. */
    class Location {
        /** Location degreesLatitude. */
        degreesLatitude;
        /** Location degreesLongitude. */
        degreesLongitude;
        /** Location name. */
        name;
    }
    /** Represents a MediaData. */
    class MediaData {
        /** MediaData localPath. */
        localPath;
    }
    /** Represents a MediaNotifyMessage. */
    class MediaNotifyMessage {
        /** MediaNotifyMessage expressPathUrl. */
        expressPathUrl;
        /** MediaNotifyMessage fileEncSha256. */
        fileEncSha256;
        /** MediaNotifyMessage fileLength. */
        fileLength;
    }
    /** Represents a MediaRetryNotification. */
    class MediaRetryNotification {
        /** MediaRetryNotification stanzaId. */
        stanzaId;
        /** MediaRetryNotification directPath. */
        directPath;
        /** MediaRetryNotification result. */
        result;
        /** MediaRetryNotification messageSecret. */
        messageSecret;
    }
    (function (MediaRetryNotification) {
        /** ResultType enum. */
        let ResultType;
        (function (ResultType) {
            ResultType[ResultType["GENERAL_ERROR"] = 0] = "GENERAL_ERROR";
            ResultType[ResultType["SUCCESS"] = 1] = "SUCCESS";
            ResultType[ResultType["NOT_FOUND"] = 2] = "NOT_FOUND";
            ResultType[ResultType["DECRYPTION_ERROR"] = 3] = "DECRYPTION_ERROR";
        })(ResultType || (ResultType = {}));
    })(MediaRetryNotification || (MediaRetryNotification = {}));
    /** MediaVisibility enum. */
    let MediaVisibility;
    (function (MediaVisibility) {
        MediaVisibility[MediaVisibility["DEFAULT"] = 0] = "DEFAULT";
        MediaVisibility[MediaVisibility["OFF"] = 1] = "OFF";
        MediaVisibility[MediaVisibility["ON"] = 2] = "ON";
    })(MediaVisibility || (MediaVisibility = {}));
    /** Represents a MemberLabel. */
    class MemberLabel {
        /** MemberLabel label. */
        label;
        /** MemberLabel labelTimestamp. */
        labelTimestamp;
    }
    /** Represents a Message. */
    class Message {
        /** Message conversation. */
        conversation;
        /** Message senderKeyDistributionMessage. */
        senderKeyDistributionMessage;
        /** Message imageMessage. */
        imageMessage;
        /** Message contactMessage. */
        contactMessage;
        /** Message locationMessage. */
        locationMessage;
        /** Message extendedTextMessage. */
        extendedTextMessage;
        /** Message documentMessage. */
        documentMessage;
        /** Message audioMessage. */
        audioMessage;
        /** Message videoMessage. */
        videoMessage;
        /** Message call. */
        call;
        /** Message chat. */
        chat;
        /** Message protocolMessage. */
        protocolMessage;
        /** Message contactsArrayMessage. */
        contactsArrayMessage;
        /** Message highlyStructuredMessage. */
        highlyStructuredMessage;
        /** Message fastRatchetKeySenderKeyDistributionMessage. */
        fastRatchetKeySenderKeyDistributionMessage;
        /** Message sendPaymentMessage. */
        sendPaymentMessage;
        /** Message liveLocationMessage. */
        liveLocationMessage;
        /** Message requestPaymentMessage. */
        requestPaymentMessage;
        /** Message declinePaymentRequestMessage. */
        declinePaymentRequestMessage;
        /** Message cancelPaymentRequestMessage. */
        cancelPaymentRequestMessage;
        /** Message templateMessage. */
        templateMessage;
        /** Message stickerMessage. */
        stickerMessage;
        /** Message groupInviteMessage. */
        groupInviteMessage;
        /** Message templateButtonReplyMessage. */
        templateButtonReplyMessage;
        /** Message productMessage. */
        productMessage;
        /** Message deviceSentMessage. */
        deviceSentMessage;
        /** Message messageContextInfo. */
        messageContextInfo;
        /** Message listMessage. */
        listMessage;
        /** Message viewOnceMessage. */
        viewOnceMessage;
        /** Message orderMessage. */
        orderMessage;
        /** Message listResponseMessage. */
        listResponseMessage;
        /** Message ephemeralMessage. */
        ephemeralMessage;
        /** Message invoiceMessage. */
        invoiceMessage;
        /** Message buttonsMessage. */
        buttonsMessage;
        /** Message buttonsResponseMessage. */
        buttonsResponseMessage;
        /** Message paymentInviteMessage. */
        paymentInviteMessage;
        /** Message interactiveMessage. */
        interactiveMessage;
        /** Message reactionMessage. */
        reactionMessage;
        /** Message stickerSyncRmrMessage. */
        stickerSyncRmrMessage;
        /** Message interactiveResponseMessage. */
        interactiveResponseMessage;
        /** Message pollCreationMessage. */
        pollCreationMessage;
        /** Message pollUpdateMessage. */
        pollUpdateMessage;
        /** Message keepInChatMessage. */
        keepInChatMessage;
        /** Message documentWithCaptionMessage. */
        documentWithCaptionMessage;
        /** Message requestPhoneNumberMessage. */
        requestPhoneNumberMessage;
        /** Message viewOnceMessageV2. */
        viewOnceMessageV2;
        /** Message encReactionMessage. */
        encReactionMessage;
        /** Message editedMessage. */
        editedMessage;
        /** Message viewOnceMessageV2Extension. */
        viewOnceMessageV2Extension;
        /** Message pollCreationMessageV2. */
        pollCreationMessageV2;
        /** Message scheduledCallCreationMessage. */
        scheduledCallCreationMessage;
        /** Message groupMentionedMessage. */
        groupMentionedMessage;
        /** Message pinInChatMessage. */
        pinInChatMessage;
        /** Message pollCreationMessageV3. */
        pollCreationMessageV3;
        /** Message scheduledCallEditMessage. */
        scheduledCallEditMessage;
        /** Message ptvMessage. */
        ptvMessage;
        /** Message botInvokeMessage. */
        botInvokeMessage;
        /** Message callLogMesssage. */
        callLogMesssage;
        /** Message messageHistoryBundle. */
        messageHistoryBundle;
        /** Message encCommentMessage. */
        encCommentMessage;
        /** Message bcallMessage. */
        bcallMessage;
        /** Message lottieStickerMessage. */
        lottieStickerMessage;
        /** Message eventMessage. */
        eventMessage;
        /** Message encEventResponseMessage. */
        encEventResponseMessage;
        /** Message commentMessage. */
        commentMessage;
        /** Message newsletterAdminInviteMessage. */
        newsletterAdminInviteMessage;
        /** Message placeholderMessage. */
        placeholderMessage;
        /** Message secretEncryptedMessage. */
        secretEncryptedMessage;
        /** Message albumMessage. */
        albumMessage;
        /** Message eventCoverImage. */
        eventCoverImage;
        /** Message stickerPackMessage. */
        stickerPackMessage;
        /** Message statusMentionMessage. */
        statusMentionMessage;
        /** Message pollResultSnapshotMessage. */
        pollResultSnapshotMessage;
        /** Message pollCreationOptionImageMessage. */
        pollCreationOptionImageMessage;
        /** Message associatedChildMessage. */
        associatedChildMessage;
        /** Message groupStatusMentionMessage. */
        groupStatusMentionMessage;
        /** Message pollCreationMessageV4. */
        pollCreationMessageV4;
        /** Message pollCreationMessageV5. */
        pollCreationMessageV5;
        /** Message statusAddYours. */
        statusAddYours;
        /** Message groupStatusMessage. */
        groupStatusMessage;
        /** Message richResponseMessage. */
        richResponseMessage;
        /** Message statusNotificationMessage. */
        statusNotificationMessage;
        /** Message limitSharingMessage. */
        limitSharingMessage;
        /** Message botTaskMessage. */
        botTaskMessage;
        /** Message questionMessage. */
        questionMessage;
        /** Message messageHistoryNotice. */
        messageHistoryNotice;
    }
    (function (Message) {
        /** Represents an AlbumMessage. */
        class AlbumMessage {
            /** AlbumMessage expectedImageCount. */
            expectedImageCount;
            /** AlbumMessage expectedVideoCount. */
            expectedVideoCount;
            /** AlbumMessage contextInfo. */
            contextInfo;
        }
        /** Represents an AppStateFatalExceptionNotification. */
        class AppStateFatalExceptionNotification {
            /** AppStateFatalExceptionNotification collectionNames. */
            collectionNames;
            /** AppStateFatalExceptionNotification timestamp. */
            timestamp;
        }
        /** Represents an AppStateSyncKey. */
        class AppStateSyncKey {
            /** AppStateSyncKey keyId. */
            keyId;
            /** AppStateSyncKey keyData. */
            keyData;
        }
        /** Represents an AppStateSyncKeyData. */
        class AppStateSyncKeyData {
            /** AppStateSyncKeyData keyData. */
            keyData;
            /** AppStateSyncKeyData fingerprint. */
            fingerprint;
            /** AppStateSyncKeyData timestamp. */
            timestamp;
        }
        /** Represents an AppStateSyncKeyFingerprint. */
        class AppStateSyncKeyFingerprint {
            /** AppStateSyncKeyFingerprint rawId. */
            rawId;
            /** AppStateSyncKeyFingerprint currentIndex. */
            currentIndex;
            /** AppStateSyncKeyFingerprint deviceIndexes. */
            deviceIndexes;
        }
        /** Represents an AppStateSyncKeyId. */
        class AppStateSyncKeyId {
            /** AppStateSyncKeyId keyId. */
            keyId;
        }
        /** Represents an AppStateSyncKeyRequest. */
        class AppStateSyncKeyRequest {
            /** AppStateSyncKeyRequest keyIds. */
            keyIds;
        }
        /** Represents an AppStateSyncKeyShare. */
        class AppStateSyncKeyShare {
            /** AppStateSyncKeyShare keys. */
            keys;
        }
        /** Represents an AudioMessage. */
        class AudioMessage {
            /** AudioMessage url. */
            url;
            /** AudioMessage mimetype. */
            mimetype;
            /** AudioMessage fileSha256. */
            fileSha256;
            /** AudioMessage fileLength. */
            fileLength;
            /** AudioMessage seconds. */
            seconds;
            /** AudioMessage ptt. */
            ptt;
            /** AudioMessage mediaKey. */
            mediaKey;
            /** AudioMessage fileEncSha256. */
            fileEncSha256;
            /** AudioMessage directPath. */
            directPath;
            /** AudioMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** AudioMessage contextInfo. */
            contextInfo;
            /** AudioMessage streamingSidecar. */
            streamingSidecar;
            /** AudioMessage waveform. */
            waveform;
            /** AudioMessage backgroundArgb. */
            backgroundArgb;
            /** AudioMessage viewOnce. */
            viewOnce;
            /** AudioMessage accessibilityLabel. */
            accessibilityLabel;
        }
        /** Represents a BCallMessage. */
        class BCallMessage {
            /** BCallMessage sessionId. */
            sessionId;
            /** BCallMessage mediaType. */
            mediaType;
            /** BCallMessage masterKey. */
            masterKey;
            /** BCallMessage caption. */
            caption;
        }
        (function (BCallMessage) {
            /** MediaType enum. */
            let MediaType;
            (function (MediaType) {
                MediaType[MediaType["UNKNOWN"] = 0] = "UNKNOWN";
                MediaType[MediaType["AUDIO"] = 1] = "AUDIO";
                MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
            })(MediaType || (MediaType = {}));
        })(BCallMessage || (BCallMessage = {}));
        /** Represents a BotFeedbackMessage. */
        class BotFeedbackMessage {
            /** BotFeedbackMessage messageKey. */
            messageKey;
            /** BotFeedbackMessage kind. */
            kind;
            /** BotFeedbackMessage text. */
            text;
            /** BotFeedbackMessage kindNegative. */
            kindNegative;
            /** BotFeedbackMessage kindPositive. */
            kindPositive;
            /** BotFeedbackMessage kindReport. */
            kindReport;
        }
        (function (BotFeedbackMessage) {
            /** BotFeedbackKind enum. */
            let BotFeedbackKind;
            (function (BotFeedbackKind) {
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_POSITIVE"] = 0] = "BOT_FEEDBACK_POSITIVE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1] = "BOT_FEEDBACK_NEGATIVE_GENERIC";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_SAFE"] = 5] = "BOT_FEEDBACK_NEGATIVE_SAFE";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_OTHER"] = 6] = "BOT_FEEDBACK_NEGATIVE_OTHER";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7] = "BOT_FEEDBACK_NEGATIVE_REFUSED";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11] = "BOT_FEEDBACK_NEGATIVE_CLARITY";
                BotFeedbackKind[BotFeedbackKind["BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON";
            })(BotFeedbackKind || (BotFeedbackKind = {}));
            /** BotFeedbackKindMultipleNegative enum. */
            let BotFeedbackKindMultipleNegative;
            (function (BotFeedbackKindMultipleNegative) {
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING";
                BotFeedbackKindMultipleNegative[BotFeedbackKindMultipleNegative["BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT";
            })(BotFeedbackKindMultipleNegative || (BotFeedbackKindMultipleNegative = {}));
            /** BotFeedbackKindMultiplePositive enum. */
            let BotFeedbackKindMultiplePositive;
            (function (BotFeedbackKindMultiplePositive) {
                BotFeedbackKindMultiplePositive[BotFeedbackKindMultiplePositive["BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC";
            })(BotFeedbackKindMultiplePositive || (BotFeedbackKindMultiplePositive = {}));
            /** ReportKind enum. */
            let ReportKind;
            (function (ReportKind) {
                ReportKind[ReportKind["GENERIC"] = 0] = "GENERIC";
            })(ReportKind || (ReportKind = {}));
        })(BotFeedbackMessage || (BotFeedbackMessage = {}));
        /** Represents a ButtonsMessage. */
        class ButtonsMessage {
            /** ButtonsMessage contentText. */
            contentText;
            /** ButtonsMessage footerText. */
            footerText;
            /** ButtonsMessage contextInfo. */
            contextInfo;
            /** ButtonsMessage buttons. */
            buttons;
            /** ButtonsMessage headerType. */
            headerType;
            /** ButtonsMessage text. */
            text;
            /** ButtonsMessage documentMessage. */
            documentMessage;
            /** ButtonsMessage imageMessage. */
            imageMessage;
            /** ButtonsMessage videoMessage. */
            videoMessage;
            /** ButtonsMessage locationMessage. */
            locationMessage;
            /** ButtonsMessage header. */
            header;
        }
        (function (ButtonsMessage) {
            /** Represents a Button. */
            class Button {
                /** Button buttonId. */
                buttonId;
                /** Button buttonText. */
                buttonText;
                /** Button type. */
                type;
                /** Button nativeFlowInfo. */
                nativeFlowInfo;
            }
            (function (Button) {
                /** Represents a ButtonText. */
                class ButtonText {
                    /** ButtonText displayText. */
                    displayText;
                }
                /** Represents a NativeFlowInfo. */
                class NativeFlowInfo {
                    /** NativeFlowInfo name. */
                    name;
                    /** NativeFlowInfo paramsJson. */
                    paramsJson;
                }
                /** Type enum. */
                let Type;
                (function (Type) {
                    Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
                    Type[Type["RESPONSE"] = 1] = "RESPONSE";
                    Type[Type["NATIVE_FLOW"] = 2] = "NATIVE_FLOW";
                })(Type || (Type = {}));
            })(Button || (Button = {}));
            /** HeaderType enum. */
            let HeaderType;
            (function (HeaderType) {
                HeaderType[HeaderType["UNKNOWN"] = 0] = "UNKNOWN";
                HeaderType[HeaderType["EMPTY"] = 1] = "EMPTY";
                HeaderType[HeaderType["TEXT"] = 2] = "TEXT";
                HeaderType[HeaderType["DOCUMENT"] = 3] = "DOCUMENT";
                HeaderType[HeaderType["IMAGE"] = 4] = "IMAGE";
                HeaderType[HeaderType["VIDEO"] = 5] = "VIDEO";
                HeaderType[HeaderType["LOCATION"] = 6] = "LOCATION";
            })(HeaderType || (HeaderType = {}));
        })(ButtonsMessage || (ButtonsMessage = {}));
        /** Represents a ButtonsResponseMessage. */
        class ButtonsResponseMessage {
            /** ButtonsResponseMessage selectedButtonId. */
            selectedButtonId;
            /** ButtonsResponseMessage contextInfo. */
            contextInfo;
            /** ButtonsResponseMessage type. */
            type;
            /** ButtonsResponseMessage selectedDisplayText. */
            selectedDisplayText;
            /** ButtonsResponseMessage response. */
            response;
        }
        (function (ButtonsResponseMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
                Type[Type["DISPLAY_TEXT"] = 1] = "DISPLAY_TEXT";
            })(Type || (Type = {}));
        })(ButtonsResponseMessage || (ButtonsResponseMessage = {}));
        /** Represents a Call. */
        class Call {
            /** Call callKey. */
            callKey;
            /** Call conversionSource. */
            conversionSource;
            /** Call conversionData. */
            conversionData;
            /** Call conversionDelaySeconds. */
            conversionDelaySeconds;
            /** Call ctwaSignals. */
            ctwaSignals;
            /** Call ctwaPayload. */
            ctwaPayload;
            /** Call contextInfo. */
            contextInfo;
        }
        /** Represents a CallLogMessage. */
        class CallLogMessage {
            /** CallLogMessage isVideo. */
            isVideo;
            /** CallLogMessage callOutcome. */
            callOutcome;
            /** CallLogMessage durationSecs. */
            durationSecs;
            /** CallLogMessage callType. */
            callType;
            /** CallLogMessage participants. */
            participants;
        }
        (function (CallLogMessage) {
            /** CallOutcome enum. */
            let CallOutcome;
            (function (CallOutcome) {
                CallOutcome[CallOutcome["CONNECTED"] = 0] = "CONNECTED";
                CallOutcome[CallOutcome["MISSED"] = 1] = "MISSED";
                CallOutcome[CallOutcome["FAILED"] = 2] = "FAILED";
                CallOutcome[CallOutcome["REJECTED"] = 3] = "REJECTED";
                CallOutcome[CallOutcome["ACCEPTED_ELSEWHERE"] = 4] = "ACCEPTED_ELSEWHERE";
                CallOutcome[CallOutcome["ONGOING"] = 5] = "ONGOING";
                CallOutcome[CallOutcome["SILENCED_BY_DND"] = 6] = "SILENCED_BY_DND";
                CallOutcome[CallOutcome["SILENCED_UNKNOWN_CALLER"] = 7] = "SILENCED_UNKNOWN_CALLER";
            })(CallOutcome || (CallOutcome = {}));
            /** Represents a CallParticipant. */
            class CallParticipant {
                /** CallParticipant jid. */
                jid;
                /** CallParticipant callOutcome. */
                callOutcome;
            }
            /** CallType enum. */
            let CallType;
            (function (CallType) {
                CallType[CallType["REGULAR"] = 0] = "REGULAR";
                CallType[CallType["SCHEDULED_CALL"] = 1] = "SCHEDULED_CALL";
                CallType[CallType["VOICE_CHAT"] = 2] = "VOICE_CHAT";
            })(CallType || (CallType = {}));
        })(CallLogMessage || (CallLogMessage = {}));
        /** Represents a CancelPaymentRequestMessage. */
        class CancelPaymentRequestMessage {
            /** CancelPaymentRequestMessage key. */
            key;
        }
        /** Represents a Chat. */
        class Chat {
            /** Chat displayName. */
            displayName;
            /** Chat id. */
            id;
        }
        /** Represents a CloudAPIThreadControlNotification. */
        class CloudAPIThreadControlNotification {
            /** CloudAPIThreadControlNotification status. */
            status;
            /** CloudAPIThreadControlNotification senderNotificationTimestampMs. */
            senderNotificationTimestampMs;
            /** CloudAPIThreadControlNotification consumerLid. */
            consumerLid;
            /** CloudAPIThreadControlNotification consumerPhoneNumber. */
            consumerPhoneNumber;
            /** CloudAPIThreadControlNotification notificationContent. */
            notificationContent;
        }
        (function (CloudAPIThreadControlNotification) {
            /** CloudAPIThreadControl enum. */
            let CloudAPIThreadControl;
            (function (CloudAPIThreadControl) {
                CloudAPIThreadControl[CloudAPIThreadControl["UNKNOWN"] = 0] = "UNKNOWN";
                CloudAPIThreadControl[CloudAPIThreadControl["CONTROL_PASSED"] = 1] = "CONTROL_PASSED";
                CloudAPIThreadControl[CloudAPIThreadControl["CONTROL_TAKEN"] = 2] = "CONTROL_TAKEN";
            })(CloudAPIThreadControl || (CloudAPIThreadControl = {}));
            /** Represents a CloudAPIThreadControlNotificationContent. */
            class CloudAPIThreadControlNotificationContent {
                /** CloudAPIThreadControlNotificationContent handoffNotificationText. */
                handoffNotificationText;
                /** CloudAPIThreadControlNotificationContent extraJson. */
                extraJson;
            }
        })(CloudAPIThreadControlNotification || (CloudAPIThreadControlNotification = {}));
        /** Represents a CommentMessage. */
        class CommentMessage {
            /** CommentMessage message. */
            message;
            /** CommentMessage targetMessageKey. */
            targetMessageKey;
        }
        /** Represents a ContactMessage. */
        class ContactMessage {
            /** ContactMessage displayName. */
            displayName;
            /** ContactMessage vcard. */
            vcard;
            /** ContactMessage contextInfo. */
            contextInfo;
        }
        /** Represents a ContactsArrayMessage. */
        class ContactsArrayMessage {
            /** ContactsArrayMessage displayName. */
            displayName;
            /** ContactsArrayMessage contacts. */
            contacts;
            /** ContactsArrayMessage contextInfo. */
            contextInfo;
        }
        /** Represents a DeclinePaymentRequestMessage. */
        class DeclinePaymentRequestMessage {
            /** DeclinePaymentRequestMessage key. */
            key;
        }
        /** Represents a DeviceSentMessage. */
        class DeviceSentMessage {
            /** DeviceSentMessage destinationJid. */
            destinationJid;
            /** DeviceSentMessage message. */
            message;
            /** DeviceSentMessage phash. */
            phash;
        }
        /** Represents a DocumentMessage. */
        class DocumentMessage {
            /** DocumentMessage url. */
            url;
            /** DocumentMessage mimetype. */
            mimetype;
            /** DocumentMessage title. */
            title;
            /** DocumentMessage fileSha256. */
            fileSha256;
            /** DocumentMessage fileLength. */
            fileLength;
            /** DocumentMessage pageCount. */
            pageCount;
            /** DocumentMessage mediaKey. */
            mediaKey;
            /** DocumentMessage fileName. */
            fileName;
            /** DocumentMessage fileEncSha256. */
            fileEncSha256;
            /** DocumentMessage directPath. */
            directPath;
            /** DocumentMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** DocumentMessage contactVcard. */
            contactVcard;
            /** DocumentMessage thumbnailDirectPath. */
            thumbnailDirectPath;
            /** DocumentMessage thumbnailSha256. */
            thumbnailSha256;
            /** DocumentMessage thumbnailEncSha256. */
            thumbnailEncSha256;
            /** DocumentMessage jpegThumbnail. */
            jpegThumbnail;
            /** DocumentMessage contextInfo. */
            contextInfo;
            /** DocumentMessage thumbnailHeight. */
            thumbnailHeight;
            /** DocumentMessage thumbnailWidth. */
            thumbnailWidth;
            /** DocumentMessage caption. */
            caption;
            /** DocumentMessage accessibilityLabel. */
            accessibilityLabel;
        }
        /** Represents an EncCommentMessage. */
        class EncCommentMessage {
            /** EncCommentMessage targetMessageKey. */
            targetMessageKey;
            /** EncCommentMessage encPayload. */
            encPayload;
            /** EncCommentMessage encIv. */
            encIv;
        }
        /** Represents an EncEventResponseMessage. */
        class EncEventResponseMessage {
            /** EncEventResponseMessage eventCreationMessageKey. */
            eventCreationMessageKey;
            /** EncEventResponseMessage encPayload. */
            encPayload;
            /** EncEventResponseMessage encIv. */
            encIv;
        }
        /** Represents an EncReactionMessage. */
        class EncReactionMessage {
            /** EncReactionMessage targetMessageKey. */
            targetMessageKey;
            /** EncReactionMessage encPayload. */
            encPayload;
            /** EncReactionMessage encIv. */
            encIv;
        }
        /** Represents an EventMessage. */
        class EventMessage {
            /** EventMessage contextInfo. */
            contextInfo;
            /** EventMessage isCanceled. */
            isCanceled;
            /** EventMessage name. */
            name;
            /** EventMessage description. */
            description;
            /** EventMessage location. */
            location;
            /** EventMessage joinLink. */
            joinLink;
            /** EventMessage startTime. */
            startTime;
            /** EventMessage endTime. */
            endTime;
            /** EventMessage extraGuestsAllowed. */
            extraGuestsAllowed;
            /** EventMessage isScheduleCall. */
            isScheduleCall;
        }
        /** Represents an EventResponseMessage. */
        class EventResponseMessage {
            /** EventResponseMessage response. */
            response;
            /** EventResponseMessage timestampMs. */
            timestampMs;
            /** EventResponseMessage extraGuestCount. */
            extraGuestCount;
        }
        (function (EventResponseMessage) {
            /** EventResponseType enum. */
            let EventResponseType;
            (function (EventResponseType) {
                EventResponseType[EventResponseType["UNKNOWN"] = 0] = "UNKNOWN";
                EventResponseType[EventResponseType["GOING"] = 1] = "GOING";
                EventResponseType[EventResponseType["NOT_GOING"] = 2] = "NOT_GOING";
                EventResponseType[EventResponseType["MAYBE"] = 3] = "MAYBE";
            })(EventResponseType || (EventResponseType = {}));
        })(EventResponseMessage || (EventResponseMessage = {}));
        /** Represents an ExtendedTextMessage. */
        class ExtendedTextMessage {
            /** ExtendedTextMessage text. */
            text;
            /** ExtendedTextMessage matchedText. */
            matchedText;
            /** ExtendedTextMessage description. */
            description;
            /** ExtendedTextMessage title. */
            title;
            /** ExtendedTextMessage textArgb. */
            textArgb;
            /** ExtendedTextMessage backgroundArgb. */
            backgroundArgb;
            /** ExtendedTextMessage font. */
            font;
            /** ExtendedTextMessage previewType. */
            previewType;
            /** ExtendedTextMessage jpegThumbnail. */
            jpegThumbnail;
            /** ExtendedTextMessage contextInfo. */
            contextInfo;
            /** ExtendedTextMessage doNotPlayInline. */
            doNotPlayInline;
            /** ExtendedTextMessage thumbnailDirectPath. */
            thumbnailDirectPath;
            /** ExtendedTextMessage thumbnailSha256. */
            thumbnailSha256;
            /** ExtendedTextMessage thumbnailEncSha256. */
            thumbnailEncSha256;
            /** ExtendedTextMessage mediaKey. */
            mediaKey;
            /** ExtendedTextMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** ExtendedTextMessage thumbnailHeight. */
            thumbnailHeight;
            /** ExtendedTextMessage thumbnailWidth. */
            thumbnailWidth;
            /** ExtendedTextMessage inviteLinkGroupType. */
            inviteLinkGroupType;
            /** ExtendedTextMessage inviteLinkParentGroupSubjectV2. */
            inviteLinkParentGroupSubjectV2;
            /** ExtendedTextMessage inviteLinkParentGroupThumbnailV2. */
            inviteLinkParentGroupThumbnailV2;
            /** ExtendedTextMessage inviteLinkGroupTypeV2. */
            inviteLinkGroupTypeV2;
            /** ExtendedTextMessage viewOnce. */
            viewOnce;
            /** ExtendedTextMessage videoHeight. */
            videoHeight;
            /** ExtendedTextMessage videoWidth. */
            videoWidth;
            /** ExtendedTextMessage faviconMMSMetadata. */
            faviconMMSMetadata;
            /** ExtendedTextMessage linkPreviewMetadata. */
            linkPreviewMetadata;
            /** ExtendedTextMessage paymentLinkMetadata. */
            paymentLinkMetadata;
        }
        (function (ExtendedTextMessage) {
            /** FontType enum. */
            let FontType;
            (function (FontType) {
                FontType[FontType["SYSTEM"] = 0] = "SYSTEM";
                FontType[FontType["SYSTEM_TEXT"] = 1] = "SYSTEM_TEXT";
                FontType[FontType["FB_SCRIPT"] = 2] = "FB_SCRIPT";
                FontType[FontType["SYSTEM_BOLD"] = 6] = "SYSTEM_BOLD";
                FontType[FontType["MORNINGBREEZE_REGULAR"] = 7] = "MORNINGBREEZE_REGULAR";
                FontType[FontType["CALISTOGA_REGULAR"] = 8] = "CALISTOGA_REGULAR";
                FontType[FontType["EXO2_EXTRABOLD"] = 9] = "EXO2_EXTRABOLD";
                FontType[FontType["COURIERPRIME_BOLD"] = 10] = "COURIERPRIME_BOLD";
            })(FontType || (FontType = {}));
            /** InviteLinkGroupType enum. */
            let InviteLinkGroupType;
            (function (InviteLinkGroupType) {
                InviteLinkGroupType[InviteLinkGroupType["DEFAULT"] = 0] = "DEFAULT";
                InviteLinkGroupType[InviteLinkGroupType["PARENT"] = 1] = "PARENT";
                InviteLinkGroupType[InviteLinkGroupType["SUB"] = 2] = "SUB";
                InviteLinkGroupType[InviteLinkGroupType["DEFAULT_SUB"] = 3] = "DEFAULT_SUB";
            })(InviteLinkGroupType || (InviteLinkGroupType = {}));
            /** PreviewType enum. */
            let PreviewType;
            (function (PreviewType) {
                PreviewType[PreviewType["NONE"] = 0] = "NONE";
                PreviewType[PreviewType["VIDEO"] = 1] = "VIDEO";
                PreviewType[PreviewType["PLACEHOLDER"] = 4] = "PLACEHOLDER";
                PreviewType[PreviewType["IMAGE"] = 5] = "IMAGE";
                PreviewType[PreviewType["PAYMENT_LINKS"] = 6] = "PAYMENT_LINKS";
                PreviewType[PreviewType["PROFILE"] = 7] = "PROFILE";
            })(PreviewType || (PreviewType = {}));
        })(ExtendedTextMessage || (ExtendedTextMessage = {}));
        /** Represents a FullHistorySyncOnDemandRequestMetadata. */
        class FullHistorySyncOnDemandRequestMetadata {
            /** FullHistorySyncOnDemandRequestMetadata requestId. */
            requestId;
        }
        /** Represents a FutureProofMessage. */
        class FutureProofMessage {
            /** FutureProofMessage message. */
            message;
        }
        /** Represents a GroupInviteMessage. */
        class GroupInviteMessage {
            /** GroupInviteMessage groupJid. */
            groupJid;
            /** GroupInviteMessage inviteCode. */
            inviteCode;
            /** GroupInviteMessage inviteExpiration. */
            inviteExpiration;
            /** GroupInviteMessage groupName. */
            groupName;
            /** GroupInviteMessage jpegThumbnail. */
            jpegThumbnail;
            /** GroupInviteMessage caption. */
            caption;
            /** GroupInviteMessage contextInfo. */
            contextInfo;
            /** GroupInviteMessage groupType. */
            groupType;
        }
        (function (GroupInviteMessage) {
            /** GroupType enum. */
            let GroupType;
            (function (GroupType) {
                GroupType[GroupType["DEFAULT"] = 0] = "DEFAULT";
                GroupType[GroupType["PARENT"] = 1] = "PARENT";
            })(GroupType || (GroupType = {}));
        })(GroupInviteMessage || (GroupInviteMessage = {}));
        /** Represents a HighlyStructuredMessage. */
        class HighlyStructuredMessage {
            /** HighlyStructuredMessage namespace. */
            namespace;
            /** HighlyStructuredMessage elementName. */
            elementName;
            /** HighlyStructuredMessage params. */
            params;
            /** HighlyStructuredMessage fallbackLg. */
            fallbackLg;
            /** HighlyStructuredMessage fallbackLc. */
            fallbackLc;
            /** HighlyStructuredMessage localizableParams. */
            localizableParams;
            /** HighlyStructuredMessage deterministicLg. */
            deterministicLg;
            /** HighlyStructuredMessage deterministicLc. */
            deterministicLc;
            /** HighlyStructuredMessage hydratedHsm. */
            hydratedHsm;
        }
        (function (HighlyStructuredMessage) {
            /** Represents a HSMLocalizableParameter. */
            class HSMLocalizableParameter {
                /** HSMLocalizableParameter default. */
                default;
                /** HSMLocalizableParameter currency. */
                currency;
                /** HSMLocalizableParameter dateTime. */
                dateTime;
                /** HSMLocalizableParameter paramOneof. */
                paramOneof;
            }
            (function (HSMLocalizableParameter) {
                /** Represents a HSMCurrency. */
                class HSMCurrency {
                    /** HSMCurrency currencyCode. */
                    currencyCode;
                    /** HSMCurrency amount1000. */
                    amount1000;
                }
                /** Represents a HSMDateTime. */
                class HSMDateTime {
                    /** HSMDateTime component. */
                    component;
                    /** HSMDateTime unixEpoch. */
                    unixEpoch;
                    /** HSMDateTime datetimeOneof. */
                    datetimeOneof;
                }
                (function (HSMDateTime) {
                    /** Represents a HSMDateTimeComponent. */
                    class HSMDateTimeComponent {
                        /** HSMDateTimeComponent dayOfWeek. */
                        dayOfWeek;
                        /** HSMDateTimeComponent year. */
                        year;
                        /** HSMDateTimeComponent month. */
                        month;
                        /** HSMDateTimeComponent dayOfMonth. */
                        dayOfMonth;
                        /** HSMDateTimeComponent hour. */
                        hour;
                        /** HSMDateTimeComponent minute. */
                        minute;
                        /** HSMDateTimeComponent calendar. */
                        calendar;
                    }
                    (function (HSMDateTimeComponent) {
                        /** CalendarType enum. */
                        let CalendarType;
                        (function (CalendarType) {
                            CalendarType[CalendarType["GREGORIAN"] = 1] = "GREGORIAN";
                            CalendarType[CalendarType["SOLAR_HIJRI"] = 2] = "SOLAR_HIJRI";
                        })(CalendarType || (CalendarType = {}));
                        /** DayOfWeekType enum. */
                        let DayOfWeekType;
                        (function (DayOfWeekType) {
                            DayOfWeekType[DayOfWeekType["MONDAY"] = 1] = "MONDAY";
                            DayOfWeekType[DayOfWeekType["TUESDAY"] = 2] = "TUESDAY";
                            DayOfWeekType[DayOfWeekType["WEDNESDAY"] = 3] = "WEDNESDAY";
                            DayOfWeekType[DayOfWeekType["THURSDAY"] = 4] = "THURSDAY";
                            DayOfWeekType[DayOfWeekType["FRIDAY"] = 5] = "FRIDAY";
                            DayOfWeekType[DayOfWeekType["SATURDAY"] = 6] = "SATURDAY";
                            DayOfWeekType[DayOfWeekType["SUNDAY"] = 7] = "SUNDAY";
                        })(DayOfWeekType || (DayOfWeekType = {}));
                    })(HSMDateTimeComponent || (HSMDateTimeComponent = {}));
                    /** Represents a HSMDateTimeUnixEpoch. */
                    class HSMDateTimeUnixEpoch {
                        /** HSMDateTimeUnixEpoch timestamp. */
                        timestamp;
                    }
                })(HSMDateTime || (HSMDateTime = {}));
            })(HSMLocalizableParameter || (HSMLocalizableParameter = {}));
        })(HighlyStructuredMessage || (HighlyStructuredMessage = {}));
        /** Represents a HistorySyncNotification. */
        class HistorySyncNotification {
            /** HistorySyncNotification fileSha256. */
            fileSha256;
            /** HistorySyncNotification fileLength. */
            fileLength;
            /** HistorySyncNotification mediaKey. */
            mediaKey;
            /** HistorySyncNotification fileEncSha256. */
            fileEncSha256;
            /** HistorySyncNotification directPath. */
            directPath;
            /** HistorySyncNotification syncType. */
            syncType;
            /** HistorySyncNotification chunkOrder. */
            chunkOrder;
            /** HistorySyncNotification originalMessageId. */
            originalMessageId;
            /** HistorySyncNotification progress. */
            progress;
            /** HistorySyncNotification oldestMsgInChunkTimestampSec. */
            oldestMsgInChunkTimestampSec;
            /** HistorySyncNotification initialHistBootstrapInlinePayload. */
            initialHistBootstrapInlinePayload;
            /** HistorySyncNotification peerDataRequestSessionId. */
            peerDataRequestSessionId;
            /** HistorySyncNotification fullHistorySyncOnDemandRequestMetadata. */
            fullHistorySyncOnDemandRequestMetadata;
            /** HistorySyncNotification encHandle. */
            encHandle;
        }
        (function (HistorySyncNotification) {
            /** HistorySyncType enum. */
            let HistorySyncType;
            (function (HistorySyncType) {
                HistorySyncType[HistorySyncType["INITIAL_BOOTSTRAP"] = 0] = "INITIAL_BOOTSTRAP";
                HistorySyncType[HistorySyncType["INITIAL_STATUS_V3"] = 1] = "INITIAL_STATUS_V3";
                HistorySyncType[HistorySyncType["FULL"] = 2] = "FULL";
                HistorySyncType[HistorySyncType["RECENT"] = 3] = "RECENT";
                HistorySyncType[HistorySyncType["PUSH_NAME"] = 4] = "PUSH_NAME";
                HistorySyncType[HistorySyncType["NON_BLOCKING_DATA"] = 5] = "NON_BLOCKING_DATA";
                HistorySyncType[HistorySyncType["ON_DEMAND"] = 6] = "ON_DEMAND";
                HistorySyncType[HistorySyncType["NO_HISTORY"] = 7] = "NO_HISTORY";
            })(HistorySyncType || (HistorySyncType = {}));
        })(HistorySyncNotification || (HistorySyncNotification = {}));
        /** Represents an ImageMessage. */
        class ImageMessage {
            /** ImageMessage url. */
            url;
            /** ImageMessage mimetype. */
            mimetype;
            /** ImageMessage caption. */
            caption;
            /** ImageMessage fileSha256. */
            fileSha256;
            /** ImageMessage fileLength. */
            fileLength;
            /** ImageMessage height. */
            height;
            /** ImageMessage width. */
            width;
            /** ImageMessage mediaKey. */
            mediaKey;
            /** ImageMessage fileEncSha256. */
            fileEncSha256;
            /** ImageMessage interactiveAnnotations. */
            interactiveAnnotations;
            /** ImageMessage directPath. */
            directPath;
            /** ImageMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** ImageMessage jpegThumbnail. */
            jpegThumbnail;
            /** ImageMessage contextInfo. */
            contextInfo;
            /** ImageMessage firstScanSidecar. */
            firstScanSidecar;
            /** ImageMessage firstScanLength. */
            firstScanLength;
            /** ImageMessage experimentGroupId. */
            experimentGroupId;
            /** ImageMessage scansSidecar. */
            scansSidecar;
            /** ImageMessage scanLengths. */
            scanLengths;
            /** ImageMessage midQualityFileSha256. */
            midQualityFileSha256;
            /** ImageMessage midQualityFileEncSha256. */
            midQualityFileEncSha256;
            /** ImageMessage viewOnce. */
            viewOnce;
            /** ImageMessage thumbnailDirectPath. */
            thumbnailDirectPath;
            /** ImageMessage thumbnailSha256. */
            thumbnailSha256;
            /** ImageMessage thumbnailEncSha256. */
            thumbnailEncSha256;
            /** ImageMessage staticUrl. */
            staticUrl;
            /** ImageMessage annotations. */
            annotations;
            /** ImageMessage imageSourceType. */
            imageSourceType;
            /** ImageMessage accessibilityLabel. */
            accessibilityLabel;
        }
        (function (ImageMessage) {
            /** ImageSourceType enum. */
            let ImageSourceType;
            (function (ImageSourceType) {
                ImageSourceType[ImageSourceType["USER_IMAGE"] = 0] = "USER_IMAGE";
                ImageSourceType[ImageSourceType["AI_GENERATED"] = 1] = "AI_GENERATED";
                ImageSourceType[ImageSourceType["AI_MODIFIED"] = 2] = "AI_MODIFIED";
                ImageSourceType[ImageSourceType["RASTERIZED_TEXT_STATUS"] = 3] = "RASTERIZED_TEXT_STATUS";
            })(ImageSourceType || (ImageSourceType = {}));
        })(ImageMessage || (ImageMessage = {}));
        /** Represents an InitialSecurityNotificationSettingSync. */
        class InitialSecurityNotificationSettingSync {
            /** InitialSecurityNotificationSettingSync securityNotificationEnabled. */
            securityNotificationEnabled;
        }
        /** Represents an InteractiveMessage. */
        class InteractiveMessage {
            /** InteractiveMessage header. */
            header;
            /** InteractiveMessage body. */
            body;
            /** InteractiveMessage footer. */
            footer;
            /** InteractiveMessage contextInfo. */
            contextInfo;
            /** InteractiveMessage urlTrackingMap. */
            urlTrackingMap;
            /** InteractiveMessage shopStorefrontMessage. */
            shopStorefrontMessage;
            /** InteractiveMessage collectionMessage. */
            collectionMessage;
            /** InteractiveMessage nativeFlowMessage. */
            nativeFlowMessage;
            /** InteractiveMessage carouselMessage. */
            carouselMessage;
            /** InteractiveMessage interactiveMessage. */
            interactiveMessage;
        }
        (function (InteractiveMessage) {
            /** Represents a Body. */
            class Body {
                /** Body text. */
                text;
            }
            /** Represents a CarouselMessage. */
            class CarouselMessage {
                /** CarouselMessage cards. */
                cards;
                /** CarouselMessage messageVersion. */
                messageVersion;
            }
            /** Represents a CollectionMessage. */
            class CollectionMessage {
                /** CollectionMessage bizJid. */
                bizJid;
                /** CollectionMessage id. */
                id;
                /** CollectionMessage messageVersion. */
                messageVersion;
            }
            /** Represents a Footer. */
            class Footer {
                /** Footer text. */
                text;
            }
            /** Represents a Header. */
            class Header {
                /** Header title. */
                title;
                /** Header subtitle. */
                subtitle;
                /** Header hasMediaAttachment. */
                hasMediaAttachment;
                /** Header documentMessage. */
                documentMessage;
                /** Header imageMessage. */
                imageMessage;
                /** Header jpegThumbnail. */
                jpegThumbnail;
                /** Header videoMessage. */
                videoMessage;
                /** Header locationMessage. */
                locationMessage;
                /** Header productMessage. */
                productMessage;
                /** Header media. */
                media;
            }
            /** Represents a NativeFlowMessage. */
            class NativeFlowMessage {
                /** NativeFlowMessage buttons. */
                buttons;
                /** NativeFlowMessage messageParamsJson. */
                messageParamsJson;
                /** NativeFlowMessage messageVersion. */
                messageVersion;
            }
            (function (NativeFlowMessage) {
                /** Represents a NativeFlowButton. */
                class NativeFlowButton {
                    /** NativeFlowButton name. */
                    name;
                    /** NativeFlowButton buttonParamsJson. */
                    buttonParamsJson;
                }
            })(NativeFlowMessage || (NativeFlowMessage = {}));
            /** Represents a ShopMessage. */
            class ShopMessage {
                /** ShopMessage id. */
                id;
                /** ShopMessage surface. */
                surface;
                /** ShopMessage messageVersion. */
                messageVersion;
            }
            (function (ShopMessage) {
                /** Surface enum. */
                let Surface;
                (function (Surface) {
                    Surface[Surface["UNKNOWN_SURFACE"] = 0] = "UNKNOWN_SURFACE";
                    Surface[Surface["FB"] = 1] = "FB";
                    Surface[Surface["IG"] = 2] = "IG";
                    Surface[Surface["WA"] = 3] = "WA";
                })(Surface || (Surface = {}));
            })(ShopMessage || (ShopMessage = {}));
        })(InteractiveMessage || (InteractiveMessage = {}));
        /** Represents an InteractiveResponseMessage. */
        class InteractiveResponseMessage {
            /** InteractiveResponseMessage body. */
            body;
            /** InteractiveResponseMessage contextInfo. */
            contextInfo;
            /** InteractiveResponseMessage nativeFlowResponseMessage. */
            nativeFlowResponseMessage;
            /** InteractiveResponseMessage interactiveResponseMessage. */
            interactiveResponseMessage;
        }
        (function (InteractiveResponseMessage) {
            /** Represents a Body. */
            class Body {
                /** Body text. */
                text;
                /** Body format. */
                format;
            }
            (function (Body) {
                /** Format enum. */
                let Format;
                (function (Format) {
                    Format[Format["DEFAULT"] = 0] = "DEFAULT";
                    Format[Format["EXTENSIONS_1"] = 1] = "EXTENSIONS_1";
                })(Format || (Format = {}));
            })(Body || (Body = {}));
            /** Represents a NativeFlowResponseMessage. */
            class NativeFlowResponseMessage {
                /** NativeFlowResponseMessage name. */
                name;
                /** NativeFlowResponseMessage paramsJson. */
                paramsJson;
                /** NativeFlowResponseMessage version. */
                version;
            }
        })(InteractiveResponseMessage || (InteractiveResponseMessage = {}));
        /** Represents an InvoiceMessage. */
        class InvoiceMessage {
            /** InvoiceMessage note. */
            note;
            /** InvoiceMessage token. */
            token;
            /** InvoiceMessage attachmentType. */
            attachmentType;
            /** InvoiceMessage attachmentMimetype. */
            attachmentMimetype;
            /** InvoiceMessage attachmentMediaKey. */
            attachmentMediaKey;
            /** InvoiceMessage attachmentMediaKeyTimestamp. */
            attachmentMediaKeyTimestamp;
            /** InvoiceMessage attachmentFileSha256. */
            attachmentFileSha256;
            /** InvoiceMessage attachmentFileEncSha256. */
            attachmentFileEncSha256;
            /** InvoiceMessage attachmentDirectPath. */
            attachmentDirectPath;
            /** InvoiceMessage attachmentJpegThumbnail. */
            attachmentJpegThumbnail;
        }
        (function (InvoiceMessage) {
            /** AttachmentType enum. */
            let AttachmentType;
            (function (AttachmentType) {
                AttachmentType[AttachmentType["IMAGE"] = 0] = "IMAGE";
                AttachmentType[AttachmentType["PDF"] = 1] = "PDF";
            })(AttachmentType || (AttachmentType = {}));
        })(InvoiceMessage || (InvoiceMessage = {}));
        /** Represents a KeepInChatMessage. */
        class KeepInChatMessage {
            /** KeepInChatMessage key. */
            key;
            /** KeepInChatMessage keepType. */
            keepType;
            /** KeepInChatMessage timestampMs. */
            timestampMs;
        }
        /** Represents a LinkPreviewMetadata. */
        class LinkPreviewMetadata {
            /** LinkPreviewMetadata paymentLinkMetadata. */
            paymentLinkMetadata;
            /** LinkPreviewMetadata urlMetadata. */
            urlMetadata;
            /** LinkPreviewMetadata fbExperimentId. */
            fbExperimentId;
        }
        /** Represents a ListMessage. */
        class ListMessage {
            /** ListMessage title. */
            title;
            /** ListMessage description. */
            description;
            /** ListMessage buttonText. */
            buttonText;
            /** ListMessage listType. */
            listType;
            /** ListMessage sections. */
            sections;
            /** ListMessage productListInfo. */
            productListInfo;
            /** ListMessage footerText. */
            footerText;
            /** ListMessage contextInfo. */
            contextInfo;
        }
        (function (ListMessage) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["UNKNOWN"] = 0] = "UNKNOWN";
                ListType[ListType["SINGLE_SELECT"] = 1] = "SINGLE_SELECT";
                ListType[ListType["PRODUCT_LIST"] = 2] = "PRODUCT_LIST";
            })(ListType || (ListType = {}));
            /** Represents a Product. */
            class Product {
                /** Product productId. */
                productId;
            }
            /** Represents a ProductListHeaderImage. */
            class ProductListHeaderImage {
                /** ProductListHeaderImage productId. */
                productId;
                /** ProductListHeaderImage jpegThumbnail. */
                jpegThumbnail;
            }
            /** Represents a ProductListInfo. */
            class ProductListInfo {
                /** ProductListInfo productSections. */
                productSections;
                /** ProductListInfo headerImage. */
                headerImage;
                /** ProductListInfo businessOwnerJid. */
                businessOwnerJid;
            }
            /** Represents a ProductSection. */
            class ProductSection {
                /** ProductSection title. */
                title;
                /** ProductSection products. */
                products;
            }
            /** Represents a Row. */
            class Row {
                /** Row title. */
                title;
                /** Row description. */
                description;
                /** Row rowId. */
                rowId;
            }
            /** Represents a Section. */
            class Section {
                /** Section title. */
                title;
                /** Section rows. */
                rows;
            }
        })(ListMessage || (ListMessage = {}));
        /** Represents a ListResponseMessage. */
        class ListResponseMessage {
            /** ListResponseMessage title. */
            title;
            /** ListResponseMessage listType. */
            listType;
            /** ListResponseMessage singleSelectReply. */
            singleSelectReply;
            /** ListResponseMessage contextInfo. */
            contextInfo;
            /** ListResponseMessage description. */
            description;
        }
        (function (ListResponseMessage) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["UNKNOWN"] = 0] = "UNKNOWN";
                ListType[ListType["SINGLE_SELECT"] = 1] = "SINGLE_SELECT";
            })(ListType || (ListType = {}));
            /** Represents a SingleSelectReply. */
            class SingleSelectReply {
                /** SingleSelectReply selectedRowId. */
                selectedRowId;
            }
        })(ListResponseMessage || (ListResponseMessage = {}));
        /** Represents a LiveLocationMessage. */
        class LiveLocationMessage {
            /** LiveLocationMessage degreesLatitude. */
            degreesLatitude;
            /** LiveLocationMessage degreesLongitude. */
            degreesLongitude;
            /** LiveLocationMessage accuracyInMeters. */
            accuracyInMeters;
            /** LiveLocationMessage speedInMps. */
            speedInMps;
            /** LiveLocationMessage degreesClockwiseFromMagneticNorth. */
            degreesClockwiseFromMagneticNorth;
            /** LiveLocationMessage caption. */
            caption;
            /** LiveLocationMessage sequenceNumber. */
            sequenceNumber;
            /** LiveLocationMessage timeOffset. */
            timeOffset;
            /** LiveLocationMessage jpegThumbnail. */
            jpegThumbnail;
            /** LiveLocationMessage contextInfo. */
            contextInfo;
        }
        /** Represents a LocationMessage. */
        class LocationMessage {
            /** LocationMessage degreesLatitude. */
            degreesLatitude;
            /** LocationMessage degreesLongitude. */
            degreesLongitude;
            /** LocationMessage name. */
            name;
            /** LocationMessage address. */
            address;
            /** LocationMessage url. */
            url;
            /** LocationMessage isLive. */
            isLive;
            /** LocationMessage accuracyInMeters. */
            accuracyInMeters;
            /** LocationMessage speedInMps. */
            speedInMps;
            /** LocationMessage degreesClockwiseFromMagneticNorth. */
            degreesClockwiseFromMagneticNorth;
            /** LocationMessage comment. */
            comment;
            /** LocationMessage jpegThumbnail. */
            jpegThumbnail;
            /** LocationMessage contextInfo. */
            contextInfo;
        }
        /** Represents a MMSThumbnailMetadata. */
        class MMSThumbnailMetadata {
            /** MMSThumbnailMetadata thumbnailDirectPath. */
            thumbnailDirectPath;
            /** MMSThumbnailMetadata thumbnailSha256. */
            thumbnailSha256;
            /** MMSThumbnailMetadata thumbnailEncSha256. */
            thumbnailEncSha256;
            /** MMSThumbnailMetadata mediaKey. */
            mediaKey;
            /** MMSThumbnailMetadata mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** MMSThumbnailMetadata thumbnailHeight. */
            thumbnailHeight;
            /** MMSThumbnailMetadata thumbnailWidth. */
            thumbnailWidth;
        }
        /** Represents a MessageHistoryBundle. */
        class MessageHistoryBundle {
            /** MessageHistoryBundle mimetype. */
            mimetype;
            /** MessageHistoryBundle fileSha256. */
            fileSha256;
            /** MessageHistoryBundle mediaKey. */
            mediaKey;
            /** MessageHistoryBundle fileEncSha256. */
            fileEncSha256;
            /** MessageHistoryBundle directPath. */
            directPath;
            /** MessageHistoryBundle mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** MessageHistoryBundle contextInfo. */
            contextInfo;
            /** MessageHistoryBundle messageHistoryMetadata. */
            messageHistoryMetadata;
        }
        /** Represents a MessageHistoryMetadata. */
        class MessageHistoryMetadata {
            /** MessageHistoryMetadata historyReceivers. */
            historyReceivers;
            /** MessageHistoryMetadata firstMessageTimestamp. */
            firstMessageTimestamp;
            /** MessageHistoryMetadata messageCount. */
            messageCount;
        }
        /** Represents a MessageHistoryNotice. */
        class MessageHistoryNotice {
            /** MessageHistoryNotice contextInfo. */
            contextInfo;
            /** MessageHistoryNotice messageHistoryMetadata. */
            messageHistoryMetadata;
        }
        /** Represents a NewsletterAdminInviteMessage. */
        class NewsletterAdminInviteMessage {
            /** NewsletterAdminInviteMessage newsletterJid. */
            newsletterJid;
            /** NewsletterAdminInviteMessage newsletterName. */
            newsletterName;
            /** NewsletterAdminInviteMessage jpegThumbnail. */
            jpegThumbnail;
            /** NewsletterAdminInviteMessage caption. */
            caption;
            /** NewsletterAdminInviteMessage inviteExpiration. */
            inviteExpiration;
            /** NewsletterAdminInviteMessage contextInfo. */
            contextInfo;
        }
        /** Represents an OrderMessage. */
        class OrderMessage {
            /** OrderMessage orderId. */
            orderId;
            /** OrderMessage thumbnail. */
            thumbnail;
            /** OrderMessage itemCount. */
            itemCount;
            /** OrderMessage status. */
            status;
            /** OrderMessage surface. */
            surface;
            /** OrderMessage message. */
            message;
            /** OrderMessage orderTitle. */
            orderTitle;
            /** OrderMessage sellerJid. */
            sellerJid;
            /** OrderMessage token. */
            token;
            /** OrderMessage totalAmount1000. */
            totalAmount1000;
            /** OrderMessage totalCurrencyCode. */
            totalCurrencyCode;
            /** OrderMessage contextInfo. */
            contextInfo;
            /** OrderMessage messageVersion. */
            messageVersion;
            /** OrderMessage orderRequestMessageId. */
            orderRequestMessageId;
            /** OrderMessage catalogType. */
            catalogType;
        }
        (function (OrderMessage) {
            /** OrderStatus enum. */
            let OrderStatus;
            (function (OrderStatus) {
                OrderStatus[OrderStatus["INQUIRY"] = 1] = "INQUIRY";
                OrderStatus[OrderStatus["ACCEPTED"] = 2] = "ACCEPTED";
                OrderStatus[OrderStatus["DECLINED"] = 3] = "DECLINED";
            })(OrderStatus || (OrderStatus = {}));
            /** OrderSurface enum. */
            let OrderSurface;
            (function (OrderSurface) {
                OrderSurface[OrderSurface["CATALOG"] = 1] = "CATALOG";
            })(OrderSurface || (OrderSurface = {}));
        })(OrderMessage || (OrderMessage = {}));
        /** Represents a PaymentInviteMessage. */
        class PaymentInviteMessage {
            /** PaymentInviteMessage serviceType. */
            serviceType;
            /** PaymentInviteMessage expiryTimestamp. */
            expiryTimestamp;
        }
        (function (PaymentInviteMessage) {
            /** ServiceType enum. */
            let ServiceType;
            (function (ServiceType) {
                ServiceType[ServiceType["UNKNOWN"] = 0] = "UNKNOWN";
                ServiceType[ServiceType["FBPAY"] = 1] = "FBPAY";
                ServiceType[ServiceType["NOVI"] = 2] = "NOVI";
                ServiceType[ServiceType["UPI"] = 3] = "UPI";
            })(ServiceType || (ServiceType = {}));
        })(PaymentInviteMessage || (PaymentInviteMessage = {}));
        /** Represents a PaymentLinkMetadata. */
        class PaymentLinkMetadata {
            /** PaymentLinkMetadata button. */
            button;
            /** PaymentLinkMetadata header. */
            header;
        }
        (function (PaymentLinkMetadata) {
            /** Represents a PaymentLinkButton. */
            class PaymentLinkButton {
                /** PaymentLinkButton displayText. */
                displayText;
            }
            /** Represents a PaymentLinkHeader. */
            class PaymentLinkHeader {
                /** PaymentLinkHeader headerType. */
                headerType;
            }
            (function (PaymentLinkHeader) {
                /** PaymentLinkHeaderType enum. */
                let PaymentLinkHeaderType;
                (function (PaymentLinkHeaderType) {
                    PaymentLinkHeaderType[PaymentLinkHeaderType["LINK_PREVIEW"] = 0] = "LINK_PREVIEW";
                    PaymentLinkHeaderType[PaymentLinkHeaderType["ORDER"] = 1] = "ORDER";
                })(PaymentLinkHeaderType || (PaymentLinkHeaderType = {}));
            })(PaymentLinkHeader || (PaymentLinkHeader = {}));
        })(PaymentLinkMetadata || (PaymentLinkMetadata = {}));
        /** Represents a PeerDataOperationRequestMessage. */
        class PeerDataOperationRequestMessage {
            /** PeerDataOperationRequestMessage peerDataOperationRequestType. */
            peerDataOperationRequestType;
            /** PeerDataOperationRequestMessage requestStickerReupload. */
            requestStickerReupload;
            /** PeerDataOperationRequestMessage requestUrlPreview. */
            requestUrlPreview;
            /** PeerDataOperationRequestMessage historySyncOnDemandRequest. */
            historySyncOnDemandRequest;
            /** PeerDataOperationRequestMessage placeholderMessageResendRequest. */
            placeholderMessageResendRequest;
            /** PeerDataOperationRequestMessage fullHistorySyncOnDemandRequest. */
            fullHistorySyncOnDemandRequest;
            /** PeerDataOperationRequestMessage syncdCollectionFatalRecoveryRequest. */
            syncdCollectionFatalRecoveryRequest;
        }
        (function (PeerDataOperationRequestMessage) {
            /** Represents a FullHistorySyncOnDemandRequest. */
            class FullHistorySyncOnDemandRequest {
                /** FullHistorySyncOnDemandRequest requestMetadata. */
                requestMetadata;
                /** FullHistorySyncOnDemandRequest historySyncConfig. */
                historySyncConfig;
            }
            /** Represents a HistorySyncOnDemandRequest. */
            class HistorySyncOnDemandRequest {
                /** HistorySyncOnDemandRequest chatJid. */
                chatJid;
                /** HistorySyncOnDemandRequest oldestMsgId. */
                oldestMsgId;
                /** HistorySyncOnDemandRequest oldestMsgFromMe. */
                oldestMsgFromMe;
                /** HistorySyncOnDemandRequest onDemandMsgCount. */
                onDemandMsgCount;
                /** HistorySyncOnDemandRequest oldestMsgTimestampMs. */
                oldestMsgTimestampMs;
                /** HistorySyncOnDemandRequest accountLid. */
                accountLid;
            }
            /** Represents a PlaceholderMessageResendRequest. */
            class PlaceholderMessageResendRequest {
                /** PlaceholderMessageResendRequest messageKey. */
                messageKey;
            }
            /** Represents a RequestStickerReupload. */
            class RequestStickerReupload {
                /** RequestStickerReupload fileSha256. */
                fileSha256;
            }
            /** Represents a RequestUrlPreview. */
            class RequestUrlPreview {
                /** RequestUrlPreview url. */
                url;
                /** RequestUrlPreview includeHqThumbnail. */
                includeHqThumbnail;
            }
            /** Represents a SyncDCollectionFatalRecoveryRequest. */
            class SyncDCollectionFatalRecoveryRequest {
                /** SyncDCollectionFatalRecoveryRequest collectionName. */
                collectionName;
                /** SyncDCollectionFatalRecoveryRequest timestamp. */
                timestamp;
            }
        })(PeerDataOperationRequestMessage || (PeerDataOperationRequestMessage = {}));
        /** Represents a PeerDataOperationRequestResponseMessage. */
        class PeerDataOperationRequestResponseMessage {
            /** PeerDataOperationRequestResponseMessage peerDataOperationRequestType. */
            peerDataOperationRequestType;
            /** PeerDataOperationRequestResponseMessage stanzaId. */
            stanzaId;
            /** PeerDataOperationRequestResponseMessage peerDataOperationResult. */
            peerDataOperationResult;
        }
        (function (PeerDataOperationRequestResponseMessage) {
            /** Represents a PeerDataOperationResult. */
            class PeerDataOperationResult {
                /** PeerDataOperationResult mediaUploadResult. */
                mediaUploadResult;
                /** PeerDataOperationResult stickerMessage. */
                stickerMessage;
                /** PeerDataOperationResult linkPreviewResponse. */
                linkPreviewResponse;
                /** PeerDataOperationResult placeholderMessageResendResponse. */
                placeholderMessageResendResponse;
                /** PeerDataOperationResult waffleNonceFetchRequestResponse. */
                waffleNonceFetchRequestResponse;
                /** PeerDataOperationResult fullHistorySyncOnDemandRequestResponse. */
                fullHistorySyncOnDemandRequestResponse;
                /** PeerDataOperationResult companionMetaNonceFetchRequestResponse. */
                companionMetaNonceFetchRequestResponse;
                /** PeerDataOperationResult syncdSnapshotFatalRecoveryResponse. */
                syncdSnapshotFatalRecoveryResponse;
            }
            (function (PeerDataOperationResult) {
                /** Represents a CompanionMetaNonceFetchResponse. */
                class CompanionMetaNonceFetchResponse {
                    /** CompanionMetaNonceFetchResponse nonce. */
                    nonce;
                }
                /** Represents a FullHistorySyncOnDemandRequestResponse. */
                class FullHistorySyncOnDemandRequestResponse {
                    /** FullHistorySyncOnDemandRequestResponse requestMetadata. */
                    requestMetadata;
                    /** FullHistorySyncOnDemandRequestResponse responseCode. */
                    responseCode;
                }
                /** FullHistorySyncOnDemandResponseCode enum. */
                let FullHistorySyncOnDemandResponseCode;
                (function (FullHistorySyncOnDemandResponseCode) {
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["REQUEST_SUCCESS"] = 0] = "REQUEST_SUCCESS";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["REQUEST_TIME_EXPIRED"] = 1] = "REQUEST_TIME_EXPIRED";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["DECLINED_SHARING_HISTORY"] = 2] = "DECLINED_SHARING_HISTORY";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["GENERIC_ERROR"] = 3] = "GENERIC_ERROR";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_REQUEST_ON_NON_SMB_PRIMARY"] = 4] = "ERROR_REQUEST_ON_NON_SMB_PRIMARY";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_HOSTED_DEVICE_NOT_CONNECTED"] = 5] = "ERROR_HOSTED_DEVICE_NOT_CONNECTED";
                    FullHistorySyncOnDemandResponseCode[FullHistorySyncOnDemandResponseCode["ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET"] = 6] = "ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET";
                })(FullHistorySyncOnDemandResponseCode || (FullHistorySyncOnDemandResponseCode = {}));
                /** Represents a LinkPreviewResponse. */
                class LinkPreviewResponse {
                    /** LinkPreviewResponse url. */
                    url;
                    /** LinkPreviewResponse title. */
                    title;
                    /** LinkPreviewResponse description. */
                    description;
                    /** LinkPreviewResponse thumbData. */
                    thumbData;
                    /** LinkPreviewResponse matchText. */
                    matchText;
                    /** LinkPreviewResponse previewType. */
                    previewType;
                    /** LinkPreviewResponse hqThumbnail. */
                    hqThumbnail;
                }
                (function (LinkPreviewResponse) {
                    /** Represents a LinkPreviewHighQualityThumbnail. */
                    class LinkPreviewHighQualityThumbnail {
                        /** LinkPreviewHighQualityThumbnail directPath. */
                        directPath;
                        /** LinkPreviewHighQualityThumbnail thumbHash. */
                        thumbHash;
                        /** LinkPreviewHighQualityThumbnail encThumbHash. */
                        encThumbHash;
                        /** LinkPreviewHighQualityThumbnail mediaKey. */
                        mediaKey;
                        /** LinkPreviewHighQualityThumbnail mediaKeyTimestampMs. */
                        mediaKeyTimestampMs;
                        /** LinkPreviewHighQualityThumbnail thumbWidth. */
                        thumbWidth;
                        /** LinkPreviewHighQualityThumbnail thumbHeight. */
                        thumbHeight;
                    }
                })(LinkPreviewResponse || (LinkPreviewResponse = {}));
                /** Represents a PlaceholderMessageResendResponse. */
                class PlaceholderMessageResendResponse {
                    /** PlaceholderMessageResendResponse webMessageInfoBytes. */
                    webMessageInfoBytes;
                }
                /** Represents a SyncDSnapshotFatalRecoveryResponse. */
                class SyncDSnapshotFatalRecoveryResponse {
                    /** SyncDSnapshotFatalRecoveryResponse collectionSnapshot. */
                    collectionSnapshot;
                    /** SyncDSnapshotFatalRecoveryResponse isCompressed. */
                    isCompressed;
                }
                /** Represents a WaffleNonceFetchResponse. */
                class WaffleNonceFetchResponse {
                    /** WaffleNonceFetchResponse nonce. */
                    nonce;
                    /** WaffleNonceFetchResponse waEntFbid. */
                    waEntFbid;
                }
            })(PeerDataOperationResult || (PeerDataOperationResult = {}));
        })(PeerDataOperationRequestResponseMessage || (PeerDataOperationRequestResponseMessage = {}));
        /** PeerDataOperationRequestType enum. */
        let PeerDataOperationRequestType;
        (function (PeerDataOperationRequestType) {
            PeerDataOperationRequestType[PeerDataOperationRequestType["UPLOAD_STICKER"] = 0] = "UPLOAD_STICKER";
            PeerDataOperationRequestType[PeerDataOperationRequestType["SEND_RECENT_STICKER_BOOTSTRAP"] = 1] = "SEND_RECENT_STICKER_BOOTSTRAP";
            PeerDataOperationRequestType[PeerDataOperationRequestType["GENERATE_LINK_PREVIEW"] = 2] = "GENERATE_LINK_PREVIEW";
            PeerDataOperationRequestType[PeerDataOperationRequestType["HISTORY_SYNC_ON_DEMAND"] = 3] = "HISTORY_SYNC_ON_DEMAND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["PLACEHOLDER_MESSAGE_RESEND"] = 4] = "PLACEHOLDER_MESSAGE_RESEND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["WAFFLE_LINKING_NONCE_FETCH"] = 5] = "WAFFLE_LINKING_NONCE_FETCH";
            PeerDataOperationRequestType[PeerDataOperationRequestType["FULL_HISTORY_SYNC_ON_DEMAND"] = 6] = "FULL_HISTORY_SYNC_ON_DEMAND";
            PeerDataOperationRequestType[PeerDataOperationRequestType["COMPANION_META_NONCE_FETCH"] = 7] = "COMPANION_META_NONCE_FETCH";
            PeerDataOperationRequestType[PeerDataOperationRequestType["COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY"] = 8] = "COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY";
        })(PeerDataOperationRequestType || (PeerDataOperationRequestType = {}));
        /** Represents a PinInChatMessage. */
        class PinInChatMessage {
            /** PinInChatMessage key. */
            key;
            /** PinInChatMessage type. */
            type;
            /** PinInChatMessage senderTimestampMs. */
            senderTimestampMs;
        }
        (function (PinInChatMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
                Type[Type["PIN_FOR_ALL"] = 1] = "PIN_FOR_ALL";
                Type[Type["UNPIN_FOR_ALL"] = 2] = "UNPIN_FOR_ALL";
            })(Type || (Type = {}));
        })(PinInChatMessage || (PinInChatMessage = {}));
        /** Represents a PlaceholderMessage. */
        class PlaceholderMessage {
            /** PlaceholderMessage type. */
            type;
        }
        (function (PlaceholderMessage) {
            /** PlaceholderType enum. */
            let PlaceholderType;
            (function (PlaceholderType) {
                PlaceholderType[PlaceholderType["MASK_LINKED_DEVICES"] = 0] = "MASK_LINKED_DEVICES";
            })(PlaceholderType || (PlaceholderType = {}));
        })(PlaceholderMessage || (PlaceholderMessage = {}));
        /** PollContentType enum. */
        let PollContentType;
        (function (PollContentType) {
            PollContentType[PollContentType["UNKNOWN"] = 0] = "UNKNOWN";
            PollContentType[PollContentType["TEXT"] = 1] = "TEXT";
            PollContentType[PollContentType["IMAGE"] = 2] = "IMAGE";
        })(PollContentType || (PollContentType = {}));
        /** Represents a PollCreationMessage. */
        class PollCreationMessage {
            /** PollCreationMessage encKey. */
            encKey;
            /** PollCreationMessage name. */
            name;
            /** PollCreationMessage options. */
            options;
            /** PollCreationMessage selectableOptionsCount. */
            selectableOptionsCount;
            /** PollCreationMessage contextInfo. */
            contextInfo;
            /** PollCreationMessage pollContentType. */
            pollContentType;
            /** PollCreationMessage pollType. */
            pollType;
            /** PollCreationMessage correctAnswer. */
            correctAnswer;
        }
        (function (PollCreationMessage) {
            /** Represents an Option. */
            class Option {
                /** Option optionName. */
                optionName;
                /** Option optionHash. */
                optionHash;
            }
            /** PollType enum. */
            let PollType;
            (function (PollType) {
                PollType[PollType["POLL"] = 0] = "POLL";
                PollType[PollType["QUIZ"] = 1] = "QUIZ";
            })(PollType || (PollType = {}));
        })(PollCreationMessage || (PollCreationMessage = {}));
        /** Represents a PollEncValue. */
        class PollEncValue {
            /** PollEncValue encPayload. */
            encPayload;
            /** PollEncValue encIv. */
            encIv;
        }
        /** Represents a PollResultSnapshotMessage. */
        class PollResultSnapshotMessage {
            /** PollResultSnapshotMessage name. */
            name;
            /** PollResultSnapshotMessage pollVotes. */
            pollVotes;
            /** PollResultSnapshotMessage contextInfo. */
            contextInfo;
        }
        (function (PollResultSnapshotMessage) {
            /** Represents a PollVote. */
            class PollVote {
                /** PollVote optionName. */
                optionName;
                /** PollVote optionVoteCount. */
                optionVoteCount;
            }
        })(PollResultSnapshotMessage || (PollResultSnapshotMessage = {}));
        /** Represents a PollUpdateMessage. */
        class PollUpdateMessage {
            /** PollUpdateMessage pollCreationMessageKey. */
            pollCreationMessageKey;
            /** PollUpdateMessage vote. */
            vote;
            /** PollUpdateMessage metadata. */
            metadata;
            /** PollUpdateMessage senderTimestampMs. */
            senderTimestampMs;
        }
        /** Represents a PollUpdateMessageMetadata. */
        class PollUpdateMessageMetadata {
        }
        /** Represents a PollVoteMessage. */
        class PollVoteMessage {
            /** PollVoteMessage selectedOptions. */
            selectedOptions;
        }
        /** Represents a ProductMessage. */
        class ProductMessage {
            /** ProductMessage product. */
            product;
            /** ProductMessage businessOwnerJid. */
            businessOwnerJid;
            /** ProductMessage catalog. */
            catalog;
            /** ProductMessage body. */
            body;
            /** ProductMessage footer. */
            footer;
            /** ProductMessage contextInfo. */
            contextInfo;
        }
        (function (ProductMessage) {
            /** Represents a CatalogSnapshot. */
            class CatalogSnapshot {
                /** CatalogSnapshot catalogImage. */
                catalogImage;
                /** CatalogSnapshot title. */
                title;
                /** CatalogSnapshot description. */
                description;
            }
            /** Represents a ProductSnapshot. */
            class ProductSnapshot {
                /** ProductSnapshot productImage. */
                productImage;
                /** ProductSnapshot productId. */
                productId;
                /** ProductSnapshot title. */
                title;
                /** ProductSnapshot description. */
                description;
                /** ProductSnapshot currencyCode. */
                currencyCode;
                /** ProductSnapshot priceAmount1000. */
                priceAmount1000;
                /** ProductSnapshot retailerId. */
                retailerId;
                /** ProductSnapshot url. */
                url;
                /** ProductSnapshot productImageCount. */
                productImageCount;
                /** ProductSnapshot firstImageId. */
                firstImageId;
                /** ProductSnapshot salePriceAmount1000. */
                salePriceAmount1000;
                /** ProductSnapshot signedUrl. */
                signedUrl;
            }
        })(ProductMessage || (ProductMessage = {}));
        /** Represents a ProtocolMessage. */
        class ProtocolMessage {
            /** ProtocolMessage key. */
            key;
            /** ProtocolMessage type. */
            type;
            /** ProtocolMessage ephemeralExpiration. */
            ephemeralExpiration;
            /** ProtocolMessage ephemeralSettingTimestamp. */
            ephemeralSettingTimestamp;
            /** ProtocolMessage historySyncNotification. */
            historySyncNotification;
            /** ProtocolMessage appStateSyncKeyShare. */
            appStateSyncKeyShare;
            /** ProtocolMessage appStateSyncKeyRequest. */
            appStateSyncKeyRequest;
            /** ProtocolMessage initialSecurityNotificationSettingSync. */
            initialSecurityNotificationSettingSync;
            /** ProtocolMessage appStateFatalExceptionNotification. */
            appStateFatalExceptionNotification;
            /** ProtocolMessage disappearingMode. */
            disappearingMode;
            /** ProtocolMessage editedMessage. */
            editedMessage;
            /** ProtocolMessage timestampMs. */
            timestampMs;
            /** ProtocolMessage peerDataOperationRequestMessage. */
            peerDataOperationRequestMessage;
            /** ProtocolMessage peerDataOperationRequestResponseMessage. */
            peerDataOperationRequestResponseMessage;
            /** ProtocolMessage botFeedbackMessage. */
            botFeedbackMessage;
            /** ProtocolMessage invokerJid. */
            invokerJid;
            /** ProtocolMessage requestWelcomeMessageMetadata. */
            requestWelcomeMessageMetadata;
            /** ProtocolMessage mediaNotifyMessage. */
            mediaNotifyMessage;
            /** ProtocolMessage cloudApiThreadControlNotification. */
            cloudApiThreadControlNotification;
            /** ProtocolMessage lidMigrationMappingSyncMessage. */
            lidMigrationMappingSyncMessage;
            /** ProtocolMessage limitSharing. */
            limitSharing;
            /** ProtocolMessage aiPsiMetadata. */
            aiPsiMetadata;
            /** ProtocolMessage aiQueryFanout. */
            aiQueryFanout;
            /** ProtocolMessage memberLabel. */
            memberLabel;
        }
        (function (ProtocolMessage) {
            /** Type enum. */
            let Type;
            (function (Type) {
                Type[Type["REVOKE"] = 0] = "REVOKE";
                Type[Type["EPHEMERAL_SETTING"] = 3] = "EPHEMERAL_SETTING";
                Type[Type["EPHEMERAL_SYNC_RESPONSE"] = 4] = "EPHEMERAL_SYNC_RESPONSE";
                Type[Type["HISTORY_SYNC_NOTIFICATION"] = 5] = "HISTORY_SYNC_NOTIFICATION";
                Type[Type["APP_STATE_SYNC_KEY_SHARE"] = 6] = "APP_STATE_SYNC_KEY_SHARE";
                Type[Type["APP_STATE_SYNC_KEY_REQUEST"] = 7] = "APP_STATE_SYNC_KEY_REQUEST";
                Type[Type["MSG_FANOUT_BACKFILL_REQUEST"] = 8] = "MSG_FANOUT_BACKFILL_REQUEST";
                Type[Type["INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC"] = 9] = "INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC";
                Type[Type["APP_STATE_FATAL_EXCEPTION_NOTIFICATION"] = 10] = "APP_STATE_FATAL_EXCEPTION_NOTIFICATION";
                Type[Type["SHARE_PHONE_NUMBER"] = 11] = "SHARE_PHONE_NUMBER";
                Type[Type["MESSAGE_EDIT"] = 14] = "MESSAGE_EDIT";
                Type[Type["PEER_DATA_OPERATION_REQUEST_MESSAGE"] = 16] = "PEER_DATA_OPERATION_REQUEST_MESSAGE";
                Type[Type["PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE"] = 17] = "PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE";
                Type[Type["REQUEST_WELCOME_MESSAGE"] = 18] = "REQUEST_WELCOME_MESSAGE";
                Type[Type["BOT_FEEDBACK_MESSAGE"] = 19] = "BOT_FEEDBACK_MESSAGE";
                Type[Type["MEDIA_NOTIFY_MESSAGE"] = 20] = "MEDIA_NOTIFY_MESSAGE";
                Type[Type["CLOUD_API_THREAD_CONTROL_NOTIFICATION"] = 21] = "CLOUD_API_THREAD_CONTROL_NOTIFICATION";
                Type[Type["LID_MIGRATION_MAPPING_SYNC"] = 22] = "LID_MIGRATION_MAPPING_SYNC";
                Type[Type["REMINDER_MESSAGE"] = 23] = "REMINDER_MESSAGE";
                Type[Type["BOT_MEMU_ONBOARDING_MESSAGE"] = 24] = "BOT_MEMU_ONBOARDING_MESSAGE";
                Type[Type["STATUS_MENTION_MESSAGE"] = 25] = "STATUS_MENTION_MESSAGE";
                Type[Type["STOP_GENERATION_MESSAGE"] = 26] = "STOP_GENERATION_MESSAGE";
                Type[Type["LIMIT_SHARING"] = 27] = "LIMIT_SHARING";
                Type[Type["AI_PSI_METADATA"] = 28] = "AI_PSI_METADATA";
                Type[Type["AI_QUERY_FANOUT"] = 29] = "AI_QUERY_FANOUT";
                Type[Type["GROUP_MEMBER_LABEL_CHANGE"] = 30] = "GROUP_MEMBER_LABEL_CHANGE";
            })(Type || (Type = {}));
        })(ProtocolMessage || (ProtocolMessage = {}));
        /** Represents a ReactionMessage. */
        class ReactionMessage {
            /** ReactionMessage key. */
            key;
            /** ReactionMessage text. */
            text;
            /** ReactionMessage groupingKey. */
            groupingKey;
            /** ReactionMessage senderTimestampMs. */
            senderTimestampMs;
        }
        /** Represents a RequestPaymentMessage. */
        class RequestPaymentMessage {
            /** RequestPaymentMessage noteMessage. */
            noteMessage;
            /** RequestPaymentMessage currencyCodeIso4217. */
            currencyCodeIso4217;
            /** RequestPaymentMessage amount1000. */
            amount1000;
            /** RequestPaymentMessage requestFrom. */
            requestFrom;
            /** RequestPaymentMessage expiryTimestamp. */
            expiryTimestamp;
            /** RequestPaymentMessage amount. */
            amount;
            /** RequestPaymentMessage background. */
            background;
        }
        /** Represents a RequestPhoneNumberMessage. */
        class RequestPhoneNumberMessage {
            /** RequestPhoneNumberMessage contextInfo. */
            contextInfo;
        }
        /** Represents a RequestWelcomeMessageMetadata. */
        class RequestWelcomeMessageMetadata {
            /** RequestWelcomeMessageMetadata localChatState. */
            localChatState;
        }
        (function (RequestWelcomeMessageMetadata) {
            /** LocalChatState enum. */
            let LocalChatState;
            (function (LocalChatState) {
                LocalChatState[LocalChatState["EMPTY"] = 0] = "EMPTY";
                LocalChatState[LocalChatState["NON_EMPTY"] = 1] = "NON_EMPTY";
            })(LocalChatState || (LocalChatState = {}));
        })(RequestWelcomeMessageMetadata || (RequestWelcomeMessageMetadata = {}));
        /** Represents a ScheduledCallCreationMessage. */
        class ScheduledCallCreationMessage {
            /** ScheduledCallCreationMessage scheduledTimestampMs. */
            scheduledTimestampMs;
            /** ScheduledCallCreationMessage callType. */
            callType;
            /** ScheduledCallCreationMessage title. */
            title;
        }
        (function (ScheduledCallCreationMessage) {
            /** CallType enum. */
            let CallType;
            (function (CallType) {
                CallType[CallType["UNKNOWN"] = 0] = "UNKNOWN";
                CallType[CallType["VOICE"] = 1] = "VOICE";
                CallType[CallType["VIDEO"] = 2] = "VIDEO";
            })(CallType || (CallType = {}));
        })(ScheduledCallCreationMessage || (ScheduledCallCreationMessage = {}));
        /** Represents a ScheduledCallEditMessage. */
        class ScheduledCallEditMessage {
            /** ScheduledCallEditMessage key. */
            key;
            /** ScheduledCallEditMessage editType. */
            editType;
        }
        (function (ScheduledCallEditMessage) {
            /** EditType enum. */
            let EditType;
            (function (EditType) {
                EditType[EditType["UNKNOWN"] = 0] = "UNKNOWN";
                EditType[EditType["CANCEL"] = 1] = "CANCEL";
            })(EditType || (EditType = {}));
        })(ScheduledCallEditMessage || (ScheduledCallEditMessage = {}));
        /** Represents a SecretEncryptedMessage. */
        class SecretEncryptedMessage {
            /** SecretEncryptedMessage targetMessageKey. */
            targetMessageKey;
            /** SecretEncryptedMessage encPayload. */
            encPayload;
            /** SecretEncryptedMessage encIv. */
            encIv;
            /** SecretEncryptedMessage secretEncType. */
            secretEncType;
        }
        (function (SecretEncryptedMessage) {
            /** SecretEncType enum. */
            let SecretEncType;
            (function (SecretEncType) {
                SecretEncType[SecretEncType["UNKNOWN"] = 0] = "UNKNOWN";
                SecretEncType[SecretEncType["EVENT_EDIT"] = 1] = "EVENT_EDIT";
                SecretEncType[SecretEncType["MESSAGE_EDIT"] = 2] = "MESSAGE_EDIT";
            })(SecretEncType || (SecretEncType = {}));
        })(SecretEncryptedMessage || (SecretEncryptedMessage = {}));
        /** Represents a SendPaymentMessage. */
        class SendPaymentMessage {
            /** SendPaymentMessage noteMessage. */
            noteMessage;
            /** SendPaymentMessage requestMessageKey. */
            requestMessageKey;
            /** SendPaymentMessage background. */
            background;
        }
        /** Represents a SenderKeyDistributionMessage. */
        class SenderKeyDistributionMessage {
            /** SenderKeyDistributionMessage groupId. */
            groupId;
            /** SenderKeyDistributionMessage axolotlSenderKeyDistributionMessage. */
            axolotlSenderKeyDistributionMessage;
        }
        /** Represents a StatusNotificationMessage. */
        class StatusNotificationMessage {
            /** StatusNotificationMessage responseMessageKey. */
            responseMessageKey;
            /** StatusNotificationMessage originalMessageKey. */
            originalMessageKey;
            /** StatusNotificationMessage type. */
            type;
        }
        (function (StatusNotificationMessage) {
            /** StatusNotificationType enum. */
            let StatusNotificationType;
            (function (StatusNotificationType) {
                StatusNotificationType[StatusNotificationType["UNKNOWN"] = 0] = "UNKNOWN";
                StatusNotificationType[StatusNotificationType["STATUS_ADD_YOURS"] = 1] = "STATUS_ADD_YOURS";
                StatusNotificationType[StatusNotificationType["STATUS_RESHARE"] = 2] = "STATUS_RESHARE";
            })(StatusNotificationType || (StatusNotificationType = {}));
        })(StatusNotificationMessage || (StatusNotificationMessage = {}));
        /** Represents a StickerMessage. */
        class StickerMessage {
            /** StickerMessage url. */
            url;
            /** StickerMessage fileSha256. */
            fileSha256;
            /** StickerMessage fileEncSha256. */
            fileEncSha256;
            /** StickerMessage mediaKey. */
            mediaKey;
            /** StickerMessage mimetype. */
            mimetype;
            /** StickerMessage height. */
            height;
            /** StickerMessage width. */
            width;
            /** StickerMessage directPath. */
            directPath;
            /** StickerMessage fileLength. */
            fileLength;
            /** StickerMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** StickerMessage firstFrameLength. */
            firstFrameLength;
            /** StickerMessage firstFrameSidecar. */
            firstFrameSidecar;
            /** StickerMessage isAnimated. */
            isAnimated;
            /** StickerMessage pngThumbnail. */
            pngThumbnail;
            /** StickerMessage contextInfo. */
            contextInfo;
            /** StickerMessage stickerSentTs. */
            stickerSentTs;
            /** StickerMessage isAvatar. */
            isAvatar;
            /** StickerMessage isAiSticker. */
            isAiSticker;
            /** StickerMessage isLottie. */
            isLottie;
            /** StickerMessage accessibilityLabel. */
            accessibilityLabel;
        }
        /** Represents a StickerPackMessage. */
        class StickerPackMessage {
            /** StickerPackMessage stickerPackId. */
            stickerPackId;
            /** StickerPackMessage name. */
            name;
            /** StickerPackMessage publisher. */
            publisher;
            /** StickerPackMessage stickers. */
            stickers;
            /** StickerPackMessage fileLength. */
            fileLength;
            /** StickerPackMessage fileSha256. */
            fileSha256;
            /** StickerPackMessage fileEncSha256. */
            fileEncSha256;
            /** StickerPackMessage mediaKey. */
            mediaKey;
            /** StickerPackMessage directPath. */
            directPath;
            /** StickerPackMessage caption. */
            caption;
            /** StickerPackMessage contextInfo. */
            contextInfo;
            /** StickerPackMessage packDescription. */
            packDescription;
            /** StickerPackMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** StickerPackMessage trayIconFileName. */
            trayIconFileName;
            /** StickerPackMessage thumbnailDirectPath. */
            thumbnailDirectPath;
            /** StickerPackMessage thumbnailSha256. */
            thumbnailSha256;
            /** StickerPackMessage thumbnailEncSha256. */
            thumbnailEncSha256;
            /** StickerPackMessage thumbnailHeight. */
            thumbnailHeight;
            /** StickerPackMessage thumbnailWidth. */
            thumbnailWidth;
            /** StickerPackMessage imageDataHash. */
            imageDataHash;
            /** StickerPackMessage stickerPackSize. */
            stickerPackSize;
            /** StickerPackMessage stickerPackOrigin. */
            stickerPackOrigin;
        }
        (function (StickerPackMessage) {
            /** Represents a Sticker. */
            class Sticker {
                /** Sticker fileName. */
                fileName;
                /** Sticker isAnimated. */
                isAnimated;
                /** Sticker emojis. */
                emojis;
                /** Sticker accessibilityLabel. */
                accessibilityLabel;
                /** Sticker isLottie. */
                isLottie;
                /** Sticker mimetype. */
                mimetype;
            }
            /** StickerPackOrigin enum. */
            let StickerPackOrigin;
            (function (StickerPackOrigin) {
                StickerPackOrigin[StickerPackOrigin["FIRST_PARTY"] = 0] = "FIRST_PARTY";
                StickerPackOrigin[StickerPackOrigin["THIRD_PARTY"] = 1] = "THIRD_PARTY";
                StickerPackOrigin[StickerPackOrigin["USER_CREATED"] = 2] = "USER_CREATED";
            })(StickerPackOrigin || (StickerPackOrigin = {}));
        })(StickerPackMessage || (StickerPackMessage = {}));
        /** Represents a StickerSyncRMRMessage. */
        class StickerSyncRMRMessage {
            /** StickerSyncRMRMessage filehash. */
            filehash;
            /** StickerSyncRMRMessage rmrSource. */
            rmrSource;
            /** StickerSyncRMRMessage requestTimestamp. */
            requestTimestamp;
        }
        /** Represents a TemplateButtonReplyMessage. */
        class TemplateButtonReplyMessage {
            /** TemplateButtonReplyMessage selectedId. */
            selectedId;
            /** TemplateButtonReplyMessage selectedDisplayText. */
            selectedDisplayText;
            /** TemplateButtonReplyMessage contextInfo. */
            contextInfo;
            /** TemplateButtonReplyMessage selectedIndex. */
            selectedIndex;
            /** TemplateButtonReplyMessage selectedCarouselCardIndex. */
            selectedCarouselCardIndex;
        }
        /** Represents a TemplateMessage. */
        class TemplateMessage {
            /** TemplateMessage contextInfo. */
            contextInfo;
            /** TemplateMessage hydratedTemplate. */
            hydratedTemplate;
            /** TemplateMessage templateId. */
            templateId;
            /** TemplateMessage fourRowTemplate. */
            fourRowTemplate;
            /** TemplateMessage hydratedFourRowTemplate. */
            hydratedFourRowTemplate;
            /** TemplateMessage interactiveMessageTemplate. */
            interactiveMessageTemplate;
            /** TemplateMessage format. */
            format;
        }
        (function (TemplateMessage) {
            /** Represents a FourRowTemplate. */
            class FourRowTemplate {
                /** FourRowTemplate content. */
                content;
                /** FourRowTemplate footer. */
                footer;
                /** FourRowTemplate buttons. */
                buttons;
                /** FourRowTemplate documentMessage. */
                documentMessage;
                /** FourRowTemplate highlyStructuredMessage. */
                highlyStructuredMessage;
                /** FourRowTemplate imageMessage. */
                imageMessage;
                /** FourRowTemplate videoMessage. */
                videoMessage;
                /** FourRowTemplate locationMessage. */
                locationMessage;
                /** FourRowTemplate title. */
                title;
            }
            /** Represents a HydratedFourRowTemplate. */
            class HydratedFourRowTemplate {
                /** HydratedFourRowTemplate hydratedContentText. */
                hydratedContentText;
                /** HydratedFourRowTemplate hydratedFooterText. */
                hydratedFooterText;
                /** HydratedFourRowTemplate hydratedButtons. */
                hydratedButtons;
                /** HydratedFourRowTemplate templateId. */
                templateId;
                /** HydratedFourRowTemplate maskLinkedDevices. */
                maskLinkedDevices;
                /** HydratedFourRowTemplate documentMessage. */
                documentMessage;
                /** HydratedFourRowTemplate hydratedTitleText. */
                hydratedTitleText;
                /** HydratedFourRowTemplate imageMessage. */
                imageMessage;
                /** HydratedFourRowTemplate videoMessage. */
                videoMessage;
                /** HydratedFourRowTemplate locationMessage. */
                locationMessage;
                /** HydratedFourRowTemplate title. */
                title;
            }
        })(TemplateMessage || (TemplateMessage = {}));
        /** Represents a URLMetadata. */
        class URLMetadata {
            /** URLMetadata fbExperimentId. */
            fbExperimentId;
        }
        /** Represents a VideoMessage. */
        class VideoMessage {
            /** VideoMessage url. */
            url;
            /** VideoMessage mimetype. */
            mimetype;
            /** VideoMessage fileSha256. */
            fileSha256;
            /** VideoMessage fileLength. */
            fileLength;
            /** VideoMessage seconds. */
            seconds;
            /** VideoMessage mediaKey. */
            mediaKey;
            /** VideoMessage caption. */
            caption;
            /** VideoMessage gifPlayback. */
            gifPlayback;
            /** VideoMessage height. */
            height;
            /** VideoMessage width. */
            width;
            /** VideoMessage fileEncSha256. */
            fileEncSha256;
            /** VideoMessage interactiveAnnotations. */
            interactiveAnnotations;
            /** VideoMessage directPath. */
            directPath;
            /** VideoMessage mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** VideoMessage jpegThumbnail. */
            jpegThumbnail;
            /** VideoMessage contextInfo. */
            contextInfo;
            /** VideoMessage streamingSidecar. */
            streamingSidecar;
            /** VideoMessage gifAttribution. */
            gifAttribution;
            /** VideoMessage viewOnce. */
            viewOnce;
            /** VideoMessage thumbnailDirectPath. */
            thumbnailDirectPath;
            /** VideoMessage thumbnailSha256. */
            thumbnailSha256;
            /** VideoMessage thumbnailEncSha256. */
            thumbnailEncSha256;
            /** VideoMessage staticUrl. */
            staticUrl;
            /** VideoMessage annotations. */
            annotations;
            /** VideoMessage accessibilityLabel. */
            accessibilityLabel;
            /** VideoMessage processedVideos. */
            processedVideos;
            /** VideoMessage externalShareFullVideoDurationInSeconds. */
            externalShareFullVideoDurationInSeconds;
        }
        (function (VideoMessage) {
            /** Attribution enum. */
            let Attribution;
            (function (Attribution) {
                Attribution[Attribution["NONE"] = 0] = "NONE";
                Attribution[Attribution["GIPHY"] = 1] = "GIPHY";
                Attribution[Attribution["TENOR"] = 2] = "TENOR";
            })(Attribution || (Attribution = {}));
        })(VideoMessage || (VideoMessage = {}));
    })(Message || (Message = {}));
    /** Represents a MessageAddOn. */
    class MessageAddOn {
        /** MessageAddOn messageAddOnType. */
        messageAddOnType;
        /** MessageAddOn messageAddOn. */
        messageAddOn;
        /** MessageAddOn senderTimestampMs. */
        senderTimestampMs;
        /** MessageAddOn serverTimestampMs. */
        serverTimestampMs;
        /** MessageAddOn status. */
        status;
        /** MessageAddOn addOnContextInfo. */
        addOnContextInfo;
        /** MessageAddOn messageAddOnKey. */
        messageAddOnKey;
        /** MessageAddOn legacyMessage. */
        legacyMessage;
    }
    (function (MessageAddOn) {
        /** MessageAddOnType enum. */
        let MessageAddOnType;
        (function (MessageAddOnType) {
            MessageAddOnType[MessageAddOnType["UNDEFINED"] = 0] = "UNDEFINED";
            MessageAddOnType[MessageAddOnType["REACTION"] = 1] = "REACTION";
            MessageAddOnType[MessageAddOnType["EVENT_RESPONSE"] = 2] = "EVENT_RESPONSE";
            MessageAddOnType[MessageAddOnType["POLL_UPDATE"] = 3] = "POLL_UPDATE";
            MessageAddOnType[MessageAddOnType["PIN_IN_CHAT"] = 4] = "PIN_IN_CHAT";
        })(MessageAddOnType || (MessageAddOnType = {}));
    })(MessageAddOn || (MessageAddOn = {}));
    /** Represents a MessageAddOnContextInfo. */
    class MessageAddOnContextInfo {
        /** MessageAddOnContextInfo messageAddOnDurationInSecs. */
        messageAddOnDurationInSecs;
        /** MessageAddOnContextInfo messageAddOnExpiryType. */
        messageAddOnExpiryType;
    }
    /** Represents a MessageAssociation. */
    class MessageAssociation {
        /** MessageAssociation associationType. */
        associationType;
        /** MessageAssociation parentMessageKey. */
        parentMessageKey;
        /** MessageAssociation messageIndex. */
        messageIndex;
    }
    (function (MessageAssociation) {
        /** AssociationType enum. */
        let AssociationType;
        (function (AssociationType) {
            AssociationType[AssociationType["UNKNOWN"] = 0] = "UNKNOWN";
            AssociationType[AssociationType["MEDIA_ALBUM"] = 1] = "MEDIA_ALBUM";
            AssociationType[AssociationType["BOT_PLUGIN"] = 2] = "BOT_PLUGIN";
            AssociationType[AssociationType["EVENT_COVER_IMAGE"] = 3] = "EVENT_COVER_IMAGE";
            AssociationType[AssociationType["STATUS_POLL"] = 4] = "STATUS_POLL";
            AssociationType[AssociationType["HD_VIDEO_DUAL_UPLOAD"] = 5] = "HD_VIDEO_DUAL_UPLOAD";
            AssociationType[AssociationType["STATUS_EXTERNAL_RESHARE"] = 6] = "STATUS_EXTERNAL_RESHARE";
            AssociationType[AssociationType["MEDIA_POLL"] = 7] = "MEDIA_POLL";
            AssociationType[AssociationType["STATUS_ADD_YOURS"] = 8] = "STATUS_ADD_YOURS";
            AssociationType[AssociationType["STATUS_NOTIFICATION"] = 9] = "STATUS_NOTIFICATION";
            AssociationType[AssociationType["HD_IMAGE_DUAL_UPLOAD"] = 10] = "HD_IMAGE_DUAL_UPLOAD";
            AssociationType[AssociationType["STICKER_ANNOTATION"] = 11] = "STICKER_ANNOTATION";
            AssociationType[AssociationType["MOTION_PHOTO"] = 12] = "MOTION_PHOTO";
            AssociationType[AssociationType["STATUS_LINK_ACTION"] = 13] = "STATUS_LINK_ACTION";
            AssociationType[AssociationType["VIEW_ALL_REPLIES"] = 14] = "VIEW_ALL_REPLIES";
        })(AssociationType || (AssociationType = {}));
    })(MessageAssociation || (MessageAssociation = {}));
    /** Represents a MessageContextInfo. */
    class MessageContextInfo {
        /** MessageContextInfo deviceListMetadata. */
        deviceListMetadata;
        /** MessageContextInfo deviceListMetadataVersion. */
        deviceListMetadataVersion;
        /** MessageContextInfo messageSecret. */
        messageSecret;
        /** MessageContextInfo paddingBytes. */
        paddingBytes;
        /** MessageContextInfo messageAddOnDurationInSecs. */
        messageAddOnDurationInSecs;
        /** MessageContextInfo botMessageSecret. */
        botMessageSecret;
        /** MessageContextInfo botMetadata. */
        botMetadata;
        /** MessageContextInfo reportingTokenVersion. */
        reportingTokenVersion;
        /** MessageContextInfo messageAddOnExpiryType. */
        messageAddOnExpiryType;
        /** MessageContextInfo messageAssociation. */
        messageAssociation;
        /** MessageContextInfo capiCreatedGroup. */
        capiCreatedGroup;
        /** MessageContextInfo supportPayload. */
        supportPayload;
        /** MessageContextInfo limitSharing. */
        limitSharing;
        /** MessageContextInfo limitSharingV2. */
        limitSharingV2;
    }
    (function (MessageContextInfo) {
        /** MessageAddonExpiryType enum. */
        let MessageAddonExpiryType;
        (function (MessageAddonExpiryType) {
            MessageAddonExpiryType[MessageAddonExpiryType["STATIC"] = 1] = "STATIC";
            MessageAddonExpiryType[MessageAddonExpiryType["DEPENDENT_ON_PARENT"] = 2] = "DEPENDENT_ON_PARENT";
        })(MessageAddonExpiryType || (MessageAddonExpiryType = {}));
    })(MessageContextInfo || (MessageContextInfo = {}));
    /** Represents a MessageKey. */
    class MessageKey {
        /** MessageKey remoteJid. */
        remoteJid;
        /** MessageKey fromMe. */
        fromMe;
        /** MessageKey id. */
        id;
        /** MessageKey participant. */
        participant;
    }
    /** Represents a MessageSecretMessage. */
    class MessageSecretMessage {
        /** MessageSecretMessage version. */
        version;
        /** MessageSecretMessage encIv. */
        encIv;
        /** MessageSecretMessage encPayload. */
        encPayload;
    }
    /** Represents a Money. */
    class Money {
        /** Money value. */
        value;
        /** Money offset. */
        offset;
        /** Money currencyCode. */
        currencyCode;
    }
    /** Represents a MsgOpaqueData. */
    class MsgOpaqueData {
        /** MsgOpaqueData body. */
        body;
        /** MsgOpaqueData caption. */
        caption;
        /** MsgOpaqueData lng. */
        lng;
        /** MsgOpaqueData isLive. */
        isLive;
        /** MsgOpaqueData lat. */
        lat;
        /** MsgOpaqueData paymentAmount1000. */
        paymentAmount1000;
        /** MsgOpaqueData paymentNoteMsgBody. */
        paymentNoteMsgBody;
        /** MsgOpaqueData matchedText. */
        matchedText;
        /** MsgOpaqueData title. */
        title;
        /** MsgOpaqueData description. */
        description;
        /** MsgOpaqueData futureproofBuffer. */
        futureproofBuffer;
        /** MsgOpaqueData clientUrl. */
        clientUrl;
        /** MsgOpaqueData loc. */
        loc;
        /** MsgOpaqueData pollName. */
        pollName;
        /** MsgOpaqueData pollOptions. */
        pollOptions;
        /** MsgOpaqueData pollSelectableOptionsCount. */
        pollSelectableOptionsCount;
        /** MsgOpaqueData messageSecret. */
        messageSecret;
        /** MsgOpaqueData originalSelfAuthor. */
        originalSelfAuthor;
        /** MsgOpaqueData senderTimestampMs. */
        senderTimestampMs;
        /** MsgOpaqueData pollUpdateParentKey. */
        pollUpdateParentKey;
        /** MsgOpaqueData encPollVote. */
        encPollVote;
        /** MsgOpaqueData isSentCagPollCreation. */
        isSentCagPollCreation;
        /** MsgOpaqueData pollContentType. */
        pollContentType;
        /** MsgOpaqueData pollVotesSnapshot. */
        pollVotesSnapshot;
        /** MsgOpaqueData encReactionTargetMessageKey. */
        encReactionTargetMessageKey;
        /** MsgOpaqueData encReactionEncPayload. */
        encReactionEncPayload;
        /** MsgOpaqueData encReactionEncIv. */
        encReactionEncIv;
        /** MsgOpaqueData botMessageSecret. */
        botMessageSecret;
        /** MsgOpaqueData targetMessageKey. */
        targetMessageKey;
        /** MsgOpaqueData encPayload. */
        encPayload;
        /** MsgOpaqueData encIv. */
        encIv;
        /** MsgOpaqueData eventName. */
        eventName;
        /** MsgOpaqueData isEventCanceled. */
        isEventCanceled;
        /** MsgOpaqueData eventDescription. */
        eventDescription;
        /** MsgOpaqueData eventJoinLink. */
        eventJoinLink;
        /** MsgOpaqueData eventStartTime. */
        eventStartTime;
        /** MsgOpaqueData eventLocation. */
        eventLocation;
        /** MsgOpaqueData eventEndTime. */
        eventEndTime;
        /** MsgOpaqueData plainProtobufBytes. */
        plainProtobufBytes;
    }
    (function (MsgOpaqueData) {
        /** Represents an EventLocation. */
        class EventLocation {
            /** EventLocation degreesLatitude. */
            degreesLatitude;
            /** EventLocation degreesLongitude. */
            degreesLongitude;
            /** EventLocation name. */
            name;
            /** EventLocation address. */
            address;
            /** EventLocation url. */
            url;
            /** EventLocation jpegThumbnail. */
            jpegThumbnail;
        }
        /** PollContentType enum. */
        let PollContentType;
        (function (PollContentType) {
            PollContentType[PollContentType["UNKNOWN"] = 0] = "UNKNOWN";
            PollContentType[PollContentType["TEXT"] = 1] = "TEXT";
            PollContentType[PollContentType["IMAGE"] = 2] = "IMAGE";
        })(PollContentType || (PollContentType = {}));
        /** Represents a PollOption. */
        class PollOption {
            /** PollOption name. */
            name;
            /** PollOption hash. */
            hash;
        }
        /** Represents a PollVoteSnapshot. */
        class PollVoteSnapshot {
            /** PollVoteSnapshot option. */
            option;
            /** PollVoteSnapshot optionVoteCount. */
            optionVoteCount;
        }
        /** Represents a PollVotesSnapshot. */
        class PollVotesSnapshot {
            /** PollVotesSnapshot pollVotes. */
            pollVotes;
        }
    })(MsgOpaqueData || (MsgOpaqueData = {}));
    /** Represents a MsgRowOpaqueData. */
    class MsgRowOpaqueData {
        /** MsgRowOpaqueData currentMsg. */
        currentMsg;
        /** MsgRowOpaqueData quotedMsg. */
        quotedMsg;
    }
    /** Represents a NoiseCertificate. */
    class NoiseCertificate {
        /** NoiseCertificate details. */
        details;
        /** NoiseCertificate signature. */
        signature;
    }
    (function (NoiseCertificate) {
        /** Represents a Details. */
        class Details {
            /** Details serial. */
            serial;
            /** Details issuer. */
            issuer;
            /** Details expires. */
            expires;
            /** Details subject. */
            subject;
            /** Details key. */
            key;
        }
    })(NoiseCertificate || (NoiseCertificate = {}));
    /** Represents a NotificationMessageInfo. */
    class NotificationMessageInfo {
        /** NotificationMessageInfo key. */
        key;
        /** NotificationMessageInfo message. */
        message;
        /** NotificationMessageInfo messageTimestamp. */
        messageTimestamp;
        /** NotificationMessageInfo participant. */
        participant;
    }
    /** Represents a NotificationSettings. */
    class NotificationSettings {
        /** NotificationSettings messageVibrate. */
        messageVibrate;
        /** NotificationSettings messagePopup. */
        messagePopup;
        /** NotificationSettings messageLight. */
        messageLight;
        /** NotificationSettings lowPriorityNotifications. */
        lowPriorityNotifications;
        /** NotificationSettings reactionsMuted. */
        reactionsMuted;
        /** NotificationSettings callVibrate. */
        callVibrate;
    }
    /** Represents a PairingRequest. */
    class PairingRequest {
        /** PairingRequest companionPublicKey. */
        companionPublicKey;
        /** PairingRequest companionIdentityKey. */
        companionIdentityKey;
        /** PairingRequest advSecret. */
        advSecret;
    }
    /** Represents a PastParticipant. */
    class PastParticipant {
        /** PastParticipant userJid. */
        userJid;
        /** PastParticipant leaveReason. */
        leaveReason;
        /** PastParticipant leaveTs. */
        leaveTs;
    }
    (function (PastParticipant) {
        /** LeaveReason enum. */
        let LeaveReason;
        (function (LeaveReason) {
            LeaveReason[LeaveReason["LEFT"] = 0] = "LEFT";
            LeaveReason[LeaveReason["REMOVED"] = 1] = "REMOVED";
        })(LeaveReason || (LeaveReason = {}));
    })(PastParticipant || (PastParticipant = {}));
    /** Represents a PastParticipants. */
    class PastParticipants {
        /** PastParticipants groupJid. */
        groupJid;
        /** PastParticipants pastParticipants. */
        pastParticipants;
    }
    /** Represents a PatchDebugData. */
    class PatchDebugData {
        /** PatchDebugData currentLthash. */
        currentLthash;
        /** PatchDebugData newLthash. */
        newLthash;
        /** PatchDebugData patchVersion. */
        patchVersion;
        /** PatchDebugData collectionName. */
        collectionName;
        /** PatchDebugData firstFourBytesFromAHashOfSnapshotMacKey. */
        firstFourBytesFromAHashOfSnapshotMacKey;
        /** PatchDebugData newLthashSubtract. */
        newLthashSubtract;
        /** PatchDebugData numberAdd. */
        numberAdd;
        /** PatchDebugData numberRemove. */
        numberRemove;
        /** PatchDebugData numberOverride. */
        numberOverride;
        /** PatchDebugData senderPlatform. */
        senderPlatform;
        /** PatchDebugData isSenderPrimary. */
        isSenderPrimary;
    }
    (function (PatchDebugData) {
        /** Platform enum. */
        let Platform;
        (function (Platform) {
            Platform[Platform["ANDROID"] = 0] = "ANDROID";
            Platform[Platform["SMBA"] = 1] = "SMBA";
            Platform[Platform["IPHONE"] = 2] = "IPHONE";
            Platform[Platform["SMBI"] = 3] = "SMBI";
            Platform[Platform["WEB"] = 4] = "WEB";
            Platform[Platform["UWP"] = 5] = "UWP";
            Platform[Platform["DARWIN"] = 6] = "DARWIN";
            Platform[Platform["IPAD"] = 7] = "IPAD";
            Platform[Platform["WEAROS"] = 8] = "WEAROS";
        })(Platform || (Platform = {}));
    })(PatchDebugData || (PatchDebugData = {}));
    /** Represents a PaymentBackground. */
    class PaymentBackground {
        /** PaymentBackground id. */
        id;
        /** PaymentBackground fileLength. */
        fileLength;
        /** PaymentBackground width. */
        width;
        /** PaymentBackground height. */
        height;
        /** PaymentBackground mimetype. */
        mimetype;
        /** PaymentBackground placeholderArgb. */
        placeholderArgb;
        /** PaymentBackground textArgb. */
        textArgb;
        /** PaymentBackground subtextArgb. */
        subtextArgb;
        /** PaymentBackground mediaData. */
        mediaData;
        /** PaymentBackground type. */
        type;
    }
    (function (PaymentBackground) {
        /** Represents a MediaData. */
        class MediaData {
            /** MediaData mediaKey. */
            mediaKey;
            /** MediaData mediaKeyTimestamp. */
            mediaKeyTimestamp;
            /** MediaData fileSha256. */
            fileSha256;
            /** MediaData fileEncSha256. */
            fileEncSha256;
            /** MediaData directPath. */
            directPath;
        }
        /** Type enum. */
        let Type;
        (function (Type) {
            Type[Type["UNKNOWN"] = 0] = "UNKNOWN";
            Type[Type["DEFAULT"] = 1] = "DEFAULT";
        })(Type || (Type = {}));
    })(PaymentBackground || (PaymentBackground = {}));
    /** Represents a PaymentInfo. */
    class PaymentInfo {
        /** PaymentInfo currencyDeprecated. */
        currencyDeprecated;
        /** PaymentInfo amount1000. */
        amount1000;
        /** PaymentInfo receiverJid. */
        receiverJid;
        /** PaymentInfo status. */
        status;
        /** PaymentInfo transactionTimestamp. */
        transactionTimestamp;
        /** PaymentInfo requestMessageKey. */
        requestMessageKey;
        /** PaymentInfo expiryTimestamp. */
        expiryTimestamp;
        /** PaymentInfo futureproofed. */
        futureproofed;
        /** PaymentInfo currency. */
        currency;
        /** PaymentInfo txnStatus. */
        txnStatus;
        /** PaymentInfo useNoviFiatFormat. */
        useNoviFiatFormat;
        /** PaymentInfo primaryAmount. */
        primaryAmount;
        /** PaymentInfo exchangeAmount. */
        exchangeAmount;
    }
    (function (PaymentInfo) {
        /** Currency enum. */
        let Currency;
        (function (Currency) {
            Currency[Currency["UNKNOWN_CURRENCY"] = 0] = "UNKNOWN_CURRENCY";
            Currency[Currency["INR"] = 1] = "INR";
        })(Currency || (Currency = {}));
        /** Status enum. */
        let Status;
        (function (Status) {
            Status[Status["UNKNOWN_STATUS"] = 0] = "UNKNOWN_STATUS";
            Status[Status["PROCESSING"] = 1] = "PROCESSING";
            Status[Status["SENT"] = 2] = "SENT";
            Status[Status["NEED_TO_ACCEPT"] = 3] = "NEED_TO_ACCEPT";
            Status[Status["COMPLETE"] = 4] = "COMPLETE";
            Status[Status["COULD_NOT_COMPLETE"] = 5] = "COULD_NOT_COMPLETE";
            Status[Status["REFUNDED"] = 6] = "REFUNDED";
            Status[Status["EXPIRED"] = 7] = "EXPIRED";
            Status[Status["REJECTED"] = 8] = "REJECTED";
            Status[Status["CANCELLED"] = 9] = "CANCELLED";
            Status[Status["WAITING_FOR_PAYER"] = 10] = "WAITING_FOR_PAYER";
            Status[Status["WAITING"] = 11] = "WAITING";
        })(Status || (Status = {}));
        /** TxnStatus enum. */
        let TxnStatus;
        (function (TxnStatus) {
            TxnStatus[TxnStatus["UNKNOWN"] = 0] = "UNKNOWN";
            TxnStatus[TxnStatus["PENDING_SETUP"] = 1] = "PENDING_SETUP";
            TxnStatus[TxnStatus["PENDING_RECEIVER_SETUP"] = 2] = "PENDING_RECEIVER_SETUP";
            TxnStatus[TxnStatus["INIT"] = 3] = "INIT";
            TxnStatus[TxnStatus["SUCCESS"] = 4] = "SUCCESS";
            TxnStatus[TxnStatus["COMPLETED"] = 5] = "COMPLETED";
            TxnStatus[TxnStatus["FAILED"] = 6] = "FAILED";
            TxnStatus[TxnStatus["FAILED_RISK"] = 7] = "FAILED_RISK";
            TxnStatus[TxnStatus["FAILED_PROCESSING"] = 8] = "FAILED_PROCESSING";
            TxnStatus[TxnStatus["FAILED_RECEIVER_PROCESSING"] = 9] = "FAILED_RECEIVER_PROCESSING";
            TxnStatus[TxnStatus["FAILED_DA"] = 10] = "FAILED_DA";
            TxnStatus[TxnStatus["FAILED_DA_FINAL"] = 11] = "FAILED_DA_FINAL";
            TxnStatus[TxnStatus["REFUNDED_TXN"] = 12] = "REFUNDED_TXN";
            TxnStatus[TxnStatus["REFUND_FAILED"] = 13] = "REFUND_FAILED";
            TxnStatus[TxnStatus["REFUND_FAILED_PROCESSING"] = 14] = "REFUND_FAILED_PROCESSING";
            TxnStatus[TxnStatus["REFUND_FAILED_DA"] = 15] = "REFUND_FAILED_DA";
            TxnStatus[TxnStatus["EXPIRED_TXN"] = 16] = "EXPIRED_TXN";
            TxnStatus[TxnStatus["AUTH_CANCELED"] = 17] = "AUTH_CANCELED";
            TxnStatus[TxnStatus["AUTH_CANCEL_FAILED_PROCESSING"] = 18] = "AUTH_CANCEL_FAILED_PROCESSING";
            TxnStatus[TxnStatus["AUTH_CANCEL_FAILED"] = 19] = "AUTH_CANCEL_FAILED";
            TxnStatus[TxnStatus["COLLECT_INIT"] = 20] = "COLLECT_INIT";
            TxnStatus[TxnStatus["COLLECT_SUCCESS"] = 21] = "COLLECT_SUCCESS";
            TxnStatus[TxnStatus["COLLECT_FAILED"] = 22] = "COLLECT_FAILED";
            TxnStatus[TxnStatus["COLLECT_FAILED_RISK"] = 23] = "COLLECT_FAILED_RISK";
            TxnStatus[TxnStatus["COLLECT_REJECTED"] = 24] = "COLLECT_REJECTED";
            TxnStatus[TxnStatus["COLLECT_EXPIRED"] = 25] = "COLLECT_EXPIRED";
            TxnStatus[TxnStatus["COLLECT_CANCELED"] = 26] = "COLLECT_CANCELED";
            TxnStatus[TxnStatus["COLLECT_CANCELLING"] = 27] = "COLLECT_CANCELLING";
            TxnStatus[TxnStatus["IN_REVIEW"] = 28] = "IN_REVIEW";
            TxnStatus[TxnStatus["REVERSAL_SUCCESS"] = 29] = "REVERSAL_SUCCESS";
            TxnStatus[TxnStatus["REVERSAL_PENDING"] = 30] = "REVERSAL_PENDING";
            TxnStatus[TxnStatus["REFUND_PENDING"] = 31] = "REFUND_PENDING";
        })(TxnStatus || (TxnStatus = {}));
    })(PaymentInfo || (PaymentInfo = {}));
    /** Represents a PhoneNumberToLIDMapping. */
    class PhoneNumberToLIDMapping {
        /** PhoneNumberToLIDMapping pnJid. */
        pnJid;
        /** PhoneNumberToLIDMapping lidJid. */
        lidJid;
    }
    /** Represents a PhotoChange. */
    class PhotoChange {
        /** PhotoChange oldPhoto. */
        oldPhoto;
        /** PhotoChange newPhoto. */
        newPhoto;
        /** PhotoChange newPhotoId. */
        newPhotoId;
    }
    /** Represents a PinInChat. */
    class PinInChat {
        /** PinInChat type. */
        type;
        /** PinInChat key. */
        key;
        /** PinInChat senderTimestampMs. */
        senderTimestampMs;
        /** PinInChat serverTimestampMs. */
        serverTimestampMs;
        /** PinInChat messageAddOnContextInfo. */
        messageAddOnContextInfo;
    }
    (function (PinInChat) {
        /** Type enum. */
        let Type;
        (function (Type) {
            Type[Type["UNKNOWN_TYPE"] = 0] = "UNKNOWN_TYPE";
            Type[Type["PIN_FOR_ALL"] = 1] = "PIN_FOR_ALL";
            Type[Type["UNPIN_FOR_ALL"] = 2] = "UNPIN_FOR_ALL";
        })(Type || (Type = {}));
    })(PinInChat || (PinInChat = {}));
    /** Represents a Point. */
    class Point {
        /** Point xDeprecated. */
        xDeprecated;
        /** Point yDeprecated. */
        yDeprecated;
        /** Point x. */
        x;
        /** Point y. */
        y;
    }
    /** Represents a PollAdditionalMetadata. */
    class PollAdditionalMetadata {
        /** PollAdditionalMetadata pollInvalidated. */
        pollInvalidated;
    }
    /** Represents a PollEncValue. */
    class PollEncValue {
        /** PollEncValue encPayload. */
        encPayload;
        /** PollEncValue encIv. */
        encIv;
    }
    /** Represents a PollUpdate. */
    class PollUpdate {
        /** PollUpdate pollUpdateMessageKey. */
        pollUpdateMessageKey;
        /** PollUpdate vote. */
        vote;
        /** PollUpdate senderTimestampMs. */
        senderTimestampMs;
        /** PollUpdate serverTimestampMs. */
        serverTimestampMs;
        /** PollUpdate unread. */
        unread;
    }
    /** Represents a PreKeyRecordStructure. */
    class PreKeyRecordStructure {
        /** PreKeyRecordStructure id. */
        id;
        /** PreKeyRecordStructure publicKey. */
        publicKey;
        /** PreKeyRecordStructure privateKey. */
        privateKey;
    }
    /** Represents a PreKeySignalMessage. */
    class PreKeySignalMessage {
        /** PreKeySignalMessage registrationId. */
        registrationId;
        /** PreKeySignalMessage preKeyId. */
        preKeyId;
        /** PreKeySignalMessage signedPreKeyId. */
        signedPreKeyId;
        /** PreKeySignalMessage baseKey. */
        baseKey;
        /** PreKeySignalMessage identityKey. */
        identityKey;
        /** PreKeySignalMessage message. */
        message;
    }
    /** Represents a PremiumMessageInfo. */
    class PremiumMessageInfo {
        /** PremiumMessageInfo serverCampaignId. */
        serverCampaignId;
    }
    /** Represents a PrimaryEphemeralIdentity. */
    class PrimaryEphemeralIdentity {
        /** PrimaryEphemeralIdentity publicKey. */
        publicKey;
        /** PrimaryEphemeralIdentity nonce. */
        nonce;
    }
    /** PrivacySystemMessage enum. */
    let PrivacySystemMessage;
    (function (PrivacySystemMessage) {
        PrivacySystemMessage[PrivacySystemMessage["E2EE_MSG"] = 1] = "E2EE_MSG";
        PrivacySystemMessage[PrivacySystemMessage["NE2EE_SELF"] = 2] = "NE2EE_SELF";
        PrivacySystemMessage[PrivacySystemMessage["NE2EE_OTHER"] = 3] = "NE2EE_OTHER";
    })(PrivacySystemMessage || (PrivacySystemMessage = {}));
    /** Represents a ProcessedVideo. */
    class ProcessedVideo {
        /** ProcessedVideo directPath. */
        directPath;
        /** ProcessedVideo fileSha256. */
        fileSha256;
        /** ProcessedVideo height. */
        height;
        /** ProcessedVideo width. */
        width;
        /** ProcessedVideo fileLength. */
        fileLength;
        /** ProcessedVideo bitrate. */
        bitrate;
        /** ProcessedVideo quality. */
        quality;
        /** ProcessedVideo capabilities. */
        capabilities;
    }
    (function (ProcessedVideo) {
        /** VideoQuality enum. */
        let VideoQuality;
        (function (VideoQuality) {
            VideoQuality[VideoQuality["UNDEFINED"] = 0] = "UNDEFINED";
            VideoQuality[VideoQuality["LOW"] = 1] = "LOW";
            VideoQuality[VideoQuality["MID"] = 2] = "MID";
            VideoQuality[VideoQuality["HIGH"] = 3] = "HIGH";
        })(VideoQuality || (VideoQuality = {}));
    })(ProcessedVideo || (ProcessedVideo = {}));
    /** Represents a ProloguePayload. */
    class ProloguePayload {
        /** ProloguePayload companionEphemeralIdentity. */
        companionEphemeralIdentity;
        /** ProloguePayload commitment. */
        commitment;
    }
    /** Represents a Pushname. */
    class Pushname {
        /** Pushname id. */
        id;
        /** Pushname pushname. */
        pushname;
    }
    /** Represents a Reaction. */
    class Reaction {
        /** Reaction key. */
        key;
        /** Reaction text. */
        text;
        /** Reaction groupingKey. */
        groupingKey;
        /** Reaction senderTimestampMs. */
        senderTimestampMs;
        /** Reaction unread. */
        unread;
    }
    /** Represents a RecentEmojiWeight. */
    class RecentEmojiWeight {
        /** RecentEmojiWeight emoji. */
        emoji;
        /** RecentEmojiWeight weight. */
        weight;
    }
    /** Represents a RecordStructure. */
    class RecordStructure {
        /** RecordStructure currentSession. */
        currentSession;
        /** RecordStructure previousSessions. */
        previousSessions;
    }
    /** Represents a Reportable. */
    class Reportable {
        /** Reportable minVersion. */
        minVersion;
        /** Reportable maxVersion. */
        maxVersion;
        /** Reportable notReportableMinVersion. */
        notReportableMinVersion;
        /** Reportable never. */
        never;
    }
    /** Represents a ReportingTokenInfo. */
    class ReportingTokenInfo {
        /** ReportingTokenInfo reportingTag. */
        reportingTag;
    }
    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage {
        /** SenderKeyDistributionMessage id. */
        id;
        /** SenderKeyDistributionMessage iteration. */
        iteration;
        /** SenderKeyDistributionMessage chainKey. */
        chainKey;
        /** SenderKeyDistributionMessage signingKey. */
        signingKey;
    }
    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage {
        /** SenderKeyMessage id. */
        id;
        /** SenderKeyMessage iteration. */
        iteration;
        /** SenderKeyMessage ciphertext. */
        ciphertext;
    }
    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure {
        /** SenderKeyRecordStructure senderKeyStates. */
        senderKeyStates;
    }
    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure {
        /** SenderKeyStateStructure senderKeyId. */
        senderKeyId;
        /** SenderKeyStateStructure senderChainKey. */
        senderChainKey;
        /** SenderKeyStateStructure senderSigningKey. */
        senderSigningKey;
        /** SenderKeyStateStructure senderMessageKeys. */
        senderMessageKeys;
    }
    (function (SenderKeyStateStructure) {
        /** Represents a SenderChainKey. */
        class SenderChainKey {
            /** SenderChainKey iteration. */
            iteration;
            /** SenderChainKey seed. */
            seed;
        }
        /** Represents a SenderMessageKey. */
        class SenderMessageKey {
            /** SenderMessageKey iteration. */
            iteration;
            /** SenderMessageKey seed. */
            seed;
        }
        /** Represents a SenderSigningKey. */
        class SenderSigningKey {
            /** SenderSigningKey public. */
            public;
            /** SenderSigningKey private. */
            private;
        }
    })(SenderKeyStateStructure || (SenderKeyStateStructure = {}));
    /** Represents a ServerErrorReceipt. */
    class ServerErrorReceipt {
        /** ServerErrorReceipt stanzaId. */
        stanzaId;
    }
    /** Represents a SessionStructure. */
    class SessionStructure {
        /** SessionStructure sessionVersion. */
        sessionVersion;
        /** SessionStructure localIdentityPublic. */
        localIdentityPublic;
        /** SessionStructure remoteIdentityPublic. */
        remoteIdentityPublic;
        /** SessionStructure rootKey. */
        rootKey;
        /** SessionStructure previousCounter. */
        previousCounter;
        /** SessionStructure senderChain. */
        senderChain;
        /** SessionStructure receiverChains. */
        receiverChains;
        /** SessionStructure pendingKeyExchange. */
        pendingKeyExchange;
        /** SessionStructure pendingPreKey. */
        pendingPreKey;
        /** SessionStructure remoteRegistrationId. */
        remoteRegistrationId;
        /** SessionStructure localRegistrationId. */
        localRegistrationId;
        /** SessionStructure needsRefresh. */
        needsRefresh;
        /** SessionStructure aliceBaseKey. */
        aliceBaseKey;
    }
    (function (SessionStructure) {
        /** Represents a Chain. */
        class Chain {
            /** Chain senderRatchetKey. */
            senderRatchetKey;
            /** Chain senderRatchetKeyPrivate. */
            senderRatchetKeyPrivate;
            /** Chain chainKey. */
            chainKey;
            /** Chain messageKeys. */
            messageKeys;
        }
        (function (Chain) {
            /** Represents a ChainKey. */
            class ChainKey {
                /** ChainKey index. */
                index;
                /** ChainKey key. */
                key;
            }
            /** Represents a MessageKey. */
            class MessageKey {
                /** MessageKey index. */
                index;
                /** MessageKey cipherKey. */
                cipherKey;
                /** MessageKey macKey. */
                macKey;
                /** MessageKey iv. */
                iv;
            }
        })(Chain || (Chain = {}));
        /** Represents a PendingKeyExchange. */
        class PendingKeyExchange {
            /** PendingKeyExchange sequence. */
            sequence;
            /** PendingKeyExchange localBaseKey. */
            localBaseKey;
            /** PendingKeyExchange localBaseKeyPrivate. */
            localBaseKeyPrivate;
            /** PendingKeyExchange localRatchetKey. */
            localRatchetKey;
            /** PendingKeyExchange localRatchetKeyPrivate. */
            localRatchetKeyPrivate;
            /** PendingKeyExchange localIdentityKey. */
            localIdentityKey;
            /** PendingKeyExchange localIdentityKeyPrivate. */
            localIdentityKeyPrivate;
        }
        /** Represents a PendingPreKey. */
        class PendingPreKey {
            /** PendingPreKey preKeyId. */
            preKeyId;
            /** PendingPreKey signedPreKeyId. */
            signedPreKeyId;
            /** PendingPreKey baseKey. */
            baseKey;
        }
    })(SessionStructure || (SessionStructure = {}));
    /** Represents a SignalMessage. */
    class SignalMessage {
        /** SignalMessage ratchetKey. */
        ratchetKey;
        /** SignalMessage counter. */
        counter;
        /** SignalMessage previousCounter. */
        previousCounter;
        /** SignalMessage ciphertext. */
        ciphertext;
    }
    /** Represents a SignedPreKeyRecordStructure. */
    class SignedPreKeyRecordStructure {
        /** SignedPreKeyRecordStructure id. */
        id;
        /** SignedPreKeyRecordStructure publicKey. */
        publicKey;
        /** SignedPreKeyRecordStructure privateKey. */
        privateKey;
        /** SignedPreKeyRecordStructure signature. */
        signature;
        /** SignedPreKeyRecordStructure timestamp. */
        timestamp;
    }
    /** Represents a StatusMentionMessage. */
    class StatusMentionMessage {
        /** StatusMentionMessage quotedStatus. */
        quotedStatus;
    }
    /** Represents a StatusPSA. */
    class StatusPSA {
        /** StatusPSA campaignId. */
        campaignId;
        /** StatusPSA campaignExpirationTimestamp. */
        campaignExpirationTimestamp;
    }
    /** Represents a StickerMetadata. */
    class StickerMetadata {
        /** StickerMetadata url. */
        url;
        /** StickerMetadata fileSha256. */
        fileSha256;
        /** StickerMetadata fileEncSha256. */
        fileEncSha256;
        /** StickerMetadata mediaKey. */
        mediaKey;
        /** StickerMetadata mimetype. */
        mimetype;
        /** StickerMetadata height. */
        height;
        /** StickerMetadata width. */
        width;
        /** StickerMetadata directPath. */
        directPath;
        /** StickerMetadata fileLength. */
        fileLength;
        /** StickerMetadata weight. */
        weight;
        /** StickerMetadata lastStickerSentTs. */
        lastStickerSentTs;
        /** StickerMetadata isLottie. */
        isLottie;
    }
    /** Represents a SyncActionData. */
    class SyncActionData {
        /** SyncActionData index. */
        index;
        /** SyncActionData value. */
        value;
        /** SyncActionData padding. */
        padding;
        /** SyncActionData version. */
        version;
    }
    /** Represents a SyncActionValue. */
    class SyncActionValue {
        /** SyncActionValue timestamp. */
        timestamp;
        /** SyncActionValue starAction. */
        starAction;
        /** SyncActionValue contactAction. */
        contactAction;
        /** SyncActionValue muteAction. */
        muteAction;
        /** SyncActionValue pinAction. */
        pinAction;
        /** SyncActionValue securityNotificationSetting. */
        securityNotificationSetting;
        /** SyncActionValue pushNameSetting. */
        pushNameSetting;
        /** SyncActionValue quickReplyAction. */
        quickReplyAction;
        /** SyncActionValue recentEmojiWeightsAction. */
        recentEmojiWeightsAction;
        /** SyncActionValue labelEditAction. */
        labelEditAction;
        /** SyncActionValue labelAssociationAction. */
        labelAssociationAction;
        /** SyncActionValue localeSetting. */
        localeSetting;
        /** SyncActionValue archiveChatAction. */
        archiveChatAction;
        /** SyncActionValue deleteMessageForMeAction. */
        deleteMessageForMeAction;
        /** SyncActionValue keyExpiration. */
        keyExpiration;
        /** SyncActionValue markChatAsReadAction. */
        markChatAsReadAction;
        /** SyncActionValue clearChatAction. */
        clearChatAction;
        /** SyncActionValue deleteChatAction. */
        deleteChatAction;
        /** SyncActionValue unarchiveChatsSetting. */
        unarchiveChatsSetting;
        /** SyncActionValue primaryFeature. */
        primaryFeature;
        /** SyncActionValue androidUnsupportedActions. */
        androidUnsupportedActions;
        /** SyncActionValue agentAction. */
        agentAction;
        /** SyncActionValue subscriptionAction. */
        subscriptionAction;
        /** SyncActionValue userStatusMuteAction. */
        userStatusMuteAction;
        /** SyncActionValue timeFormatAction. */
        timeFormatAction;
        /** SyncActionValue nuxAction. */
        nuxAction;
        /** SyncActionValue primaryVersionAction. */
        primaryVersionAction;
        /** SyncActionValue stickerAction. */
        stickerAction;
        /** SyncActionValue removeRecentStickerAction. */
        removeRecentStickerAction;
        /** SyncActionValue chatAssignment. */
        chatAssignment;
        /** SyncActionValue chatAssignmentOpenedStatus. */
        chatAssignmentOpenedStatus;
        /** SyncActionValue pnForLidChatAction. */
        pnForLidChatAction;
        /** SyncActionValue marketingMessageAction. */
        marketingMessageAction;
        /** SyncActionValue marketingMessageBroadcastAction. */
        marketingMessageBroadcastAction;
        /** SyncActionValue externalWebBetaAction. */
        externalWebBetaAction;
        /** SyncActionValue privacySettingRelayAllCalls. */
        privacySettingRelayAllCalls;
        /** SyncActionValue callLogAction. */
        callLogAction;
        /** SyncActionValue statusPrivacy. */
        statusPrivacy;
        /** SyncActionValue botWelcomeRequestAction. */
        botWelcomeRequestAction;
        /** SyncActionValue deleteIndividualCallLog. */
        deleteIndividualCallLog;
        /** SyncActionValue labelReorderingAction. */
        labelReorderingAction;
        /** SyncActionValue paymentInfoAction. */
        paymentInfoAction;
        /** SyncActionValue customPaymentMethodsAction. */
        customPaymentMethodsAction;
        /** SyncActionValue lockChatAction. */
        lockChatAction;
        /** SyncActionValue chatLockSettings. */
        chatLockSettings;
        /** SyncActionValue wamoUserIdentifierAction. */
        wamoUserIdentifierAction;
        /** SyncActionValue privacySettingDisableLinkPreviewsAction. */
        privacySettingDisableLinkPreviewsAction;
        /** SyncActionValue deviceCapabilities. */
        deviceCapabilities;
        /** SyncActionValue noteEditAction. */
        noteEditAction;
        /** SyncActionValue favoritesAction. */
        favoritesAction;
        /** SyncActionValue merchantPaymentPartnerAction. */
        merchantPaymentPartnerAction;
        /** SyncActionValue waffleAccountLinkStateAction. */
        waffleAccountLinkStateAction;
        /** SyncActionValue usernameChatStartMode. */
        usernameChatStartMode;
        /** SyncActionValue notificationActivitySettingAction. */
        notificationActivitySettingAction;
        /** SyncActionValue lidContactAction. */
        lidContactAction;
        /** SyncActionValue ctwaPerCustomerDataSharingAction. */
        ctwaPerCustomerDataSharingAction;
        /** SyncActionValue paymentTosAction. */
        paymentTosAction;
    }
    (function (SyncActionValue) {
        /** Represents an AgentAction. */
        class AgentAction {
            /** AgentAction name. */
            name;
            /** AgentAction deviceID. */
            deviceID;
            /** AgentAction isDeleted. */
            isDeleted;
        }
        /** Represents an AndroidUnsupportedActions. */
        class AndroidUnsupportedActions {
            /** AndroidUnsupportedActions allowed. */
            allowed;
        }
        /** Represents an ArchiveChatAction. */
        class ArchiveChatAction {
            /** ArchiveChatAction archived. */
            archived;
            /** ArchiveChatAction messageRange. */
            messageRange;
        }
        /** Represents a BotWelcomeRequestAction. */
        class BotWelcomeRequestAction {
            /** BotWelcomeRequestAction isSent. */
            isSent;
        }
        /** Represents a CallLogAction. */
        class CallLogAction {
            /** CallLogAction callLogRecord. */
            callLogRecord;
        }
        /** Represents a ChatAssignmentAction. */
        class ChatAssignmentAction {
            /** ChatAssignmentAction deviceAgentID. */
            deviceAgentID;
        }
        /** Represents a ChatAssignmentOpenedStatusAction. */
        class ChatAssignmentOpenedStatusAction {
            /** ChatAssignmentOpenedStatusAction chatOpened. */
            chatOpened;
        }
        /** Represents a ClearChatAction. */
        class ClearChatAction {
            /** ClearChatAction messageRange. */
            messageRange;
        }
        /** Represents a ContactAction. */
        class ContactAction {
            /** ContactAction fullName. */
            fullName;
            /** ContactAction firstName. */
            firstName;
            /** ContactAction lidJid. */
            lidJid;
            /** ContactAction saveOnPrimaryAddressbook. */
            saveOnPrimaryAddressbook;
            /** ContactAction pnJid. */
            pnJid;
            /** ContactAction username. */
            username;
        }
        /** Represents a CtwaPerCustomerDataSharingAction. */
        class CtwaPerCustomerDataSharingAction {
            /** CtwaPerCustomerDataSharingAction isCtwaPerCustomerDataSharingEnabled. */
            isCtwaPerCustomerDataSharingEnabled;
        }
        /** Represents a CustomPaymentMethod. */
        class CustomPaymentMethod {
            /** CustomPaymentMethod credentialId. */
            credentialId;
            /** CustomPaymentMethod country. */
            country;
            /** CustomPaymentMethod type. */
            type;
            /** CustomPaymentMethod metadata. */
            metadata;
        }
        /** Represents a CustomPaymentMethodMetadata. */
        class CustomPaymentMethodMetadata {
            /** CustomPaymentMethodMetadata key. */
            key;
            /** CustomPaymentMethodMetadata value. */
            value;
        }
        /** Represents a CustomPaymentMethodsAction. */
        class CustomPaymentMethodsAction {
            /** CustomPaymentMethodsAction customPaymentMethods. */
            customPaymentMethods;
        }
        /** Represents a DeleteChatAction. */
        class DeleteChatAction {
            /** DeleteChatAction messageRange. */
            messageRange;
        }
        /** Represents a DeleteIndividualCallLogAction. */
        class DeleteIndividualCallLogAction {
            /** DeleteIndividualCallLogAction peerJid. */
            peerJid;
            /** DeleteIndividualCallLogAction isIncoming. */
            isIncoming;
        }
        /** Represents a DeleteMessageForMeAction. */
        class DeleteMessageForMeAction {
            /** DeleteMessageForMeAction deleteMedia. */
            deleteMedia;
            /** DeleteMessageForMeAction messageTimestamp. */
            messageTimestamp;
        }
        /** Represents an ExternalWebBetaAction. */
        class ExternalWebBetaAction {
            /** ExternalWebBetaAction isOptIn. */
            isOptIn;
        }
        /** Represents a FavoritesAction. */
        class FavoritesAction {
            /** FavoritesAction favorites. */
            favorites;
        }
        (function (FavoritesAction) {
            /** Represents a Favorite. */
            class Favorite {
                /** Favorite id. */
                id;
            }
        })(FavoritesAction || (FavoritesAction = {}));
        /** Represents a KeyExpiration. */
        class KeyExpiration {
            /** KeyExpiration expiredKeyEpoch. */
            expiredKeyEpoch;
        }
        /** Represents a LabelAssociationAction. */
        class LabelAssociationAction {
            /** LabelAssociationAction labeled. */
            labeled;
        }
        /** Represents a LabelEditAction. */
        class LabelEditAction {
            /** LabelEditAction name. */
            name;
            /** LabelEditAction color. */
            color;
            /** LabelEditAction predefinedId. */
            predefinedId;
            /** LabelEditAction deleted. */
            deleted;
            /** LabelEditAction orderIndex. */
            orderIndex;
            /** LabelEditAction isActive. */
            isActive;
            /** LabelEditAction type. */
            type;
            /** LabelEditAction isImmutable. */
            isImmutable;
        }
        (function (LabelEditAction) {
            /** ListType enum. */
            let ListType;
            (function (ListType) {
                ListType[ListType["NONE"] = 0] = "NONE";
                ListType[ListType["UNREAD"] = 1] = "UNREAD";
                ListType[ListType["GROUPS"] = 2] = "GROUPS";
                ListType[ListType["FAVORITES"] = 3] = "FAVORITES";
                ListType[ListType["PREDEFINED"] = 4] = "PREDEFINED";
                ListType[ListType["CUSTOM"] = 5] = "CUSTOM";
                ListType[ListType["COMMUNITY"] = 6] = "COMMUNITY";
                ListType[ListType["SERVER_ASSIGNED"] = 7] = "SERVER_ASSIGNED";
            })(ListType || (ListType = {}));
        })(LabelEditAction || (LabelEditAction = {}));
        /** Represents a LabelReorderingAction. */
        class LabelReorderingAction {
            /** LabelReorderingAction sortedLabelIds. */
            sortedLabelIds;
        }
        /** Represents a LidContactAction. */
        class LidContactAction {
            /** LidContactAction fullName. */
            fullName;
            /** LidContactAction firstName. */
            firstName;
            /** LidContactAction username. */
            username;
            /** LidContactAction saveOnPrimaryAddressbook. */
            saveOnPrimaryAddressbook;
        }
        /** Represents a LocaleSetting. */
        class LocaleSetting {
            /** LocaleSetting locale. */
            locale;
        }
        /** Represents a LockChatAction. */
        class LockChatAction {
            /** LockChatAction locked. */
            locked;
        }
        /** Represents a MarkChatAsReadAction. */
        class MarkChatAsReadAction {
            /** MarkChatAsReadAction read. */
            read;
            /** MarkChatAsReadAction messageRange. */
            messageRange;
        }
        /** Represents a MarketingMessageAction. */
        class MarketingMessageAction {
            /** MarketingMessageAction name. */
            name;
            /** MarketingMessageAction message. */
            message;
            /** MarketingMessageAction type. */
            type;
            /** MarketingMessageAction createdAt. */
            createdAt;
            /** MarketingMessageAction lastSentAt. */
            lastSentAt;
            /** MarketingMessageAction isDeleted. */
            isDeleted;
            /** MarketingMessageAction mediaId. */
            mediaId;
        }
        (function (MarketingMessageAction) {
            /** MarketingMessagePrototypeType enum. */
            let MarketingMessagePrototypeType;
            (function (MarketingMessagePrototypeType) {
                MarketingMessagePrototypeType[MarketingMessagePrototypeType["PERSONALIZED"] = 0] = "PERSONALIZED";
            })(MarketingMessagePrototypeType || (MarketingMessagePrototypeType = {}));
        })(MarketingMessageAction || (MarketingMessageAction = {}));
        /** Represents a MarketingMessageBroadcastAction. */
        class MarketingMessageBroadcastAction {
            /** MarketingMessageBroadcastAction repliedCount. */
            repliedCount;
        }
        /** Represents a MerchantPaymentPartnerAction. */
        class MerchantPaymentPartnerAction {
            /** MerchantPaymentPartnerAction status. */
            status;
            /** MerchantPaymentPartnerAction country. */
            country;
            /** MerchantPaymentPartnerAction gatewayName. */
            gatewayName;
            /** MerchantPaymentPartnerAction credentialId. */
            credentialId;
        }
        (function (MerchantPaymentPartnerAction) {
            /** Status enum. */
            let Status;
            (function (Status) {
                Status[Status["ACTIVE"] = 0] = "ACTIVE";
                Status[Status["INACTIVE"] = 1] = "INACTIVE";
            })(Status || (Status = {}));
        })(MerchantPaymentPartnerAction || (MerchantPaymentPartnerAction = {}));
        /** Represents a MuteAction. */
        class MuteAction {
            /** MuteAction muted. */
            muted;
            /** MuteAction muteEndTimestamp. */
            muteEndTimestamp;
            /** MuteAction autoMuted. */
            autoMuted;
        }
        /** Represents a NoteEditAction. */
        class NoteEditAction {
            /** NoteEditAction type. */
            type;
            /** NoteEditAction chatJid. */
            chatJid;
            /** NoteEditAction createdAt. */
            createdAt;
            /** NoteEditAction deleted. */
            deleted;
            /** NoteEditAction unstructuredContent. */
            unstructuredContent;
        }
        (function (NoteEditAction) {
            /** NoteType enum. */
            let NoteType;
            (function (NoteType) {
                NoteType[NoteType["UNSTRUCTURED"] = 1] = "UNSTRUCTURED";
                NoteType[NoteType["STRUCTURED"] = 2] = "STRUCTURED";
            })(NoteType || (NoteType = {}));
        })(NoteEditAction || (NoteEditAction = {}));
        /** Represents a NotificationActivitySettingAction. */
        class NotificationActivitySettingAction {
            /** NotificationActivitySettingAction notificationActivitySetting. */
            notificationActivitySetting;
        }
        (function (NotificationActivitySettingAction) {
            /** NotificationActivitySetting enum. */
            let NotificationActivitySetting;
            (function (NotificationActivitySetting) {
                NotificationActivitySetting[NotificationActivitySetting["DEFAULT_ALL_MESSAGES"] = 0] = "DEFAULT_ALL_MESSAGES";
                NotificationActivitySetting[NotificationActivitySetting["ALL_MESSAGES"] = 1] = "ALL_MESSAGES";
                NotificationActivitySetting[NotificationActivitySetting["HIGHLIGHTS"] = 2] = "HIGHLIGHTS";
                NotificationActivitySetting[NotificationActivitySetting["DEFAULT_HIGHLIGHTS"] = 3] = "DEFAULT_HIGHLIGHTS";
            })(NotificationActivitySetting || (NotificationActivitySetting = {}));
        })(NotificationActivitySettingAction || (NotificationActivitySettingAction = {}));
        /** Represents a NuxAction. */
        class NuxAction {
            /** NuxAction acknowledged. */
            acknowledged;
        }
        /** Represents a PaymentInfoAction. */
        class PaymentInfoAction {
            /** PaymentInfoAction cpi. */
            cpi;
        }
        /** Represents a PaymentTosAction. */
        class PaymentTosAction {
            /** PaymentTosAction paymentNotice. */
            paymentNotice;
            /** PaymentTosAction accepted. */
            accepted;
        }
        (function (PaymentTosAction) {
            /** PaymentNotice enum. */
            let PaymentNotice;
            (function (PaymentNotice) {
                PaymentNotice[PaymentNotice["BR_PAY_PRIVACY_POLICY"] = 0] = "BR_PAY_PRIVACY_POLICY";
            })(PaymentNotice || (PaymentNotice = {}));
        })(PaymentTosAction || (PaymentTosAction = {}));
        /** Represents a PinAction. */
        class PinAction {
            /** PinAction pinned. */
            pinned;
        }
        /** Represents a PnForLidChatAction. */
        class PnForLidChatAction {
            /** PnForLidChatAction pnJid. */
            pnJid;
        }
        /** Represents a PrimaryFeature. */
        class PrimaryFeature {
            /** PrimaryFeature flags. */
            flags;
        }
        /** Represents a PrimaryVersionAction. */
        class PrimaryVersionAction {
            /** PrimaryVersionAction version. */
            version;
        }
        /** Represents a PrivacySettingDisableLinkPreviewsAction. */
        class PrivacySettingDisableLinkPreviewsAction {
            /** PrivacySettingDisableLinkPreviewsAction isPreviewsDisabled. */
            isPreviewsDisabled;
        }
        /** Represents a PrivacySettingRelayAllCalls. */
        class PrivacySettingRelayAllCalls {
            /** PrivacySettingRelayAllCalls isEnabled. */
            isEnabled;
        }
        /** Represents a PushNameSetting. */
        class PushNameSetting {
            /** PushNameSetting name. */
            name;
        }
        /** Represents a QuickReplyAction. */
        class QuickReplyAction {
            /** QuickReplyAction shortcut. */
            shortcut;
            /** QuickReplyAction message. */
            message;
            /** QuickReplyAction keywords. */
            keywords;
            /** QuickReplyAction count. */
            count;
            /** QuickReplyAction deleted. */
            deleted;
        }
        /** Represents a RecentEmojiWeightsAction. */
        class RecentEmojiWeightsAction {
            /** RecentEmojiWeightsAction weights. */
            weights;
        }
        /** Represents a RemoveRecentStickerAction. */
        class RemoveRecentStickerAction {
            /** RemoveRecentStickerAction lastStickerSentTs. */
            lastStickerSentTs;
        }
        /** Represents a SecurityNotificationSetting. */
        class SecurityNotificationSetting {
            /** SecurityNotificationSetting showNotification. */
            showNotification;
        }
        /** Represents a StarAction. */
        class StarAction {
            /** StarAction starred. */
            starred;
        }
        /** Represents a StatusPrivacyAction. */
        class StatusPrivacyAction {
            /** StatusPrivacyAction mode. */
            mode;
            /** StatusPrivacyAction userJid. */
            userJid;
        }
        (function (StatusPrivacyAction) {
            /** StatusDistributionMode enum. */
            let StatusDistributionMode;
            (function (StatusDistributionMode) {
                StatusDistributionMode[StatusDistributionMode["ALLOW_LIST"] = 0] = "ALLOW_LIST";
                StatusDistributionMode[StatusDistributionMode["DENY_LIST"] = 1] = "DENY_LIST";
                StatusDistributionMode[StatusDistributionMode["CONTACTS"] = 2] = "CONTACTS";
            })(StatusDistributionMode || (StatusDistributionMode = {}));
        })(StatusPrivacyAction || (StatusPrivacyAction = {}));
        /** Represents a StickerAction. */
        class StickerAction {
            /** StickerAction url. */
            url;
            /** StickerAction fileEncSha256. */
            fileEncSha256;
            /** StickerAction mediaKey. */
            mediaKey;
            /** StickerAction mimetype. */
            mimetype;
            /** StickerAction height. */
            height;
            /** StickerAction width. */
            width;
            /** StickerAction directPath. */
            directPath;
            /** StickerAction fileLength. */
            fileLength;
            /** StickerAction isFavorite. */
            isFavorite;
            /** StickerAction deviceIdHint. */
            deviceIdHint;
            /** StickerAction isLottie. */
            isLottie;
        }
        /** Represents a SubscriptionAction. */
        class SubscriptionAction {
            /** SubscriptionAction isDeactivated. */
            isDeactivated;
            /** SubscriptionAction isAutoRenewing. */
            isAutoRenewing;
            /** SubscriptionAction expirationDate. */
            expirationDate;
        }
        /** Represents a SyncActionMessage. */
        class SyncActionMessage {
            /** SyncActionMessage key. */
            key;
            /** SyncActionMessage timestamp. */
            timestamp;
        }
        /** Represents a SyncActionMessageRange. */
        class SyncActionMessageRange {
            /** SyncActionMessageRange lastMessageTimestamp. */
            lastMessageTimestamp;
            /** SyncActionMessageRange lastSystemMessageTimestamp. */
            lastSystemMessageTimestamp;
            /** SyncActionMessageRange messages. */
            messages;
        }
        /** Represents a TimeFormatAction. */
        class TimeFormatAction {
            /** TimeFormatAction isTwentyFourHourFormatEnabled. */
            isTwentyFourHourFormatEnabled;
        }
        /** Represents an UnarchiveChatsSetting. */
        class UnarchiveChatsSetting {
            /** UnarchiveChatsSetting unarchiveChats. */
            unarchiveChats;
        }
        /** Represents a UserStatusMuteAction. */
        class UserStatusMuteAction {
            /** UserStatusMuteAction muted. */
            muted;
        }
        /** Represents a UsernameChatStartModeAction. */
        class UsernameChatStartModeAction {
            /** UsernameChatStartModeAction chatStartMode. */
            chatStartMode;
        }
        (function (UsernameChatStartModeAction) {
            /** ChatStartMode enum. */
            let ChatStartMode;
            (function (ChatStartMode) {
                ChatStartMode[ChatStartMode["LID"] = 1] = "LID";
                ChatStartMode[ChatStartMode["PN"] = 2] = "PN";
            })(ChatStartMode || (ChatStartMode = {}));
        })(UsernameChatStartModeAction || (UsernameChatStartModeAction = {}));
        /** Represents a WaffleAccountLinkStateAction. */
        class WaffleAccountLinkStateAction {
            /** WaffleAccountLinkStateAction linkState. */
            linkState;
        }
        (function (WaffleAccountLinkStateAction) {
            /** AccountLinkState enum. */
            let AccountLinkState;
            (function (AccountLinkState) {
                AccountLinkState[AccountLinkState["ACTIVE"] = 0] = "ACTIVE";
            })(AccountLinkState || (AccountLinkState = {}));
        })(WaffleAccountLinkStateAction || (WaffleAccountLinkStateAction = {}));
        /** Represents a WamoUserIdentifierAction. */
        class WamoUserIdentifierAction {
            /** WamoUserIdentifierAction identifier. */
            identifier;
        }
    })(SyncActionValue || (SyncActionValue = {}));
    /** Represents a SyncdIndex. */
    class SyncdIndex {
        /** SyncdIndex blob. */
        blob;
    }
    /** Represents a SyncdMutation. */
    class SyncdMutation {
        /** SyncdMutation operation. */
        operation;
        /** SyncdMutation record. */
        record;
    }
    (function (SyncdMutation) {
        /** SyncdOperation enum. */
        let SyncdOperation;
        (function (SyncdOperation) {
            SyncdOperation[SyncdOperation["SET"] = 0] = "SET";
            SyncdOperation[SyncdOperation["REMOVE"] = 1] = "REMOVE";
        })(SyncdOperation || (SyncdOperation = {}));
    })(SyncdMutation || (SyncdMutation = {}));
    /** Represents a SyncdMutations. */
    class SyncdMutations {
        /** SyncdMutations mutations. */
        mutations;
    }
    /** Represents a SyncdPatch. */
    class SyncdPatch {
        /** SyncdPatch version. */
        version;
        /** SyncdPatch mutations. */
        mutations;
        /** SyncdPatch externalMutations. */
        externalMutations;
        /** SyncdPatch snapshotMac. */
        snapshotMac;
        /** SyncdPatch patchMac. */
        patchMac;
        /** SyncdPatch keyId. */
        keyId;
        /** SyncdPatch exitCode. */
        exitCode;
        /** SyncdPatch deviceIndex. */
        deviceIndex;
        /** SyncdPatch clientDebugData. */
        clientDebugData;
    }
    /** Represents a SyncdRecord. */
    class SyncdRecord {
        /** SyncdRecord index. */
        index;
        /** SyncdRecord value. */
        value;
        /** SyncdRecord keyId. */
        keyId;
    }
    /** Represents a SyncdSnapshot. */
    class SyncdSnapshot {
        /** SyncdSnapshot version. */
        version;
        /** SyncdSnapshot records. */
        records;
        /** SyncdSnapshot mac. */
        mac;
        /** SyncdSnapshot keyId. */
        keyId;
    }
    /** Represents a SyncdValue. */
    class SyncdValue {
        /** SyncdValue blob. */
        blob;
    }
    /** Represents a SyncdVersion. */
    class SyncdVersion {
        /** SyncdVersion version. */
        version;
    }
    /** Represents a TapLinkAction. */
    class TapLinkAction {
        /** TapLinkAction title. */
        title;
        /** TapLinkAction tapUrl. */
        tapUrl;
    }
    /** Represents a TemplateButton. */
    class TemplateButton {
        /** TemplateButton index. */
        index;
        /** TemplateButton quickReplyButton. */
        quickReplyButton;
        /** TemplateButton urlButton. */
        urlButton;
        /** TemplateButton callButton. */
        callButton;
        /** TemplateButton button. */
        button;
    }
    (function (TemplateButton) {
        /** Represents a CallButton. */
        class CallButton {
            /** CallButton displayText. */
            displayText;
            /** CallButton phoneNumber. */
            phoneNumber;
        }
        /** Represents a QuickReplyButton. */
        class QuickReplyButton {
            /** QuickReplyButton displayText. */
            displayText;
            /** QuickReplyButton id. */
            id;
        }
        /** Represents a URLButton. */
        class URLButton {
            /** URLButton displayText. */
            displayText;
            /** URLButton url. */
            url;
        }
    })(TemplateButton || (TemplateButton = {}));
    /** Represents an UrlTrackingMap. */
    class UrlTrackingMap {
        /** UrlTrackingMap urlTrackingMapElements. */
        urlTrackingMapElements;
    }
    (function (UrlTrackingMap) {
        /** Represents an UrlTrackingMapElement. */
        class UrlTrackingMapElement {
            /** UrlTrackingMapElement originalUrl. */
            originalUrl;
            /** UrlTrackingMapElement unconsentedUsersUrl. */
            unconsentedUsersUrl;
            /** UrlTrackingMapElement consentedUsersUrl. */
            consentedUsersUrl;
            /** UrlTrackingMapElement cardIndex. */
            cardIndex;
        }
    })(UrlTrackingMap || (UrlTrackingMap = {}));
    /** Represents a UserPassword. */
    class UserPassword {
        /** UserPassword encoding. */
        encoding;
        /** UserPassword transformer. */
        transformer;
        /** UserPassword transformerArg. */
        transformerArg;
        /** UserPassword transformedData. */
        transformedData;
    }
    (function (UserPassword) {
        /** Encoding enum. */
        let Encoding;
        (function (Encoding) {
            Encoding[Encoding["UTF8"] = 0] = "UTF8";
            Encoding[Encoding["UTF8_BROKEN"] = 1] = "UTF8_BROKEN";
        })(Encoding || (Encoding = {}));
        /** Transformer enum. */
        let Transformer;
        (function (Transformer) {
            Transformer[Transformer["NONE"] = 0] = "NONE";
            Transformer[Transformer["PBKDF2_HMAC_SHA512"] = 1] = "PBKDF2_HMAC_SHA512";
            Transformer[Transformer["PBKDF2_HMAC_SHA384"] = 2] = "PBKDF2_HMAC_SHA384";
        })(Transformer || (Transformer = {}));
        /** Represents a TransformerArg. */
        class TransformerArg {
            /** TransformerArg key. */
            key;
            /** TransformerArg value. */
            value;
        }
        (function (TransformerArg) {
            /** Represents a Value. */
            class Value {
                /** Value asBlob. */
                asBlob;
                /** Value asUnsignedInteger. */
                asUnsignedInteger;
                /** Value value. */
                value;
            }
        })(TransformerArg || (TransformerArg = {}));
    })(UserPassword || (UserPassword = {}));
    /** Represents a UserReceipt. */
    class UserReceipt {
        /** UserReceipt userJid. */
        userJid;
        /** UserReceipt receiptTimestamp. */
        receiptTimestamp;
        /** UserReceipt readTimestamp. */
        readTimestamp;
        /** UserReceipt playedTimestamp. */
        playedTimestamp;
        /** UserReceipt pendingDeviceJid. */
        pendingDeviceJid;
        /** UserReceipt deliveredDeviceJid. */
        deliveredDeviceJid;
    }
    /** Represents a VerifiedNameCertificate. */
    class VerifiedNameCertificate {
        /** VerifiedNameCertificate details. */
        details;
        /** VerifiedNameCertificate signature. */
        signature;
        /** VerifiedNameCertificate serverSignature. */
        serverSignature;
    }
    (function (VerifiedNameCertificate) {
        /** Represents a Details. */
        class Details {
            /** Details serial. */
            serial;
            /** Details issuer. */
            issuer;
            /** Details verifiedName. */
            verifiedName;
            /** Details localizedNames. */
            localizedNames;
            /** Details issueTime. */
            issueTime;
        }
    })(VerifiedNameCertificate || (VerifiedNameCertificate = {}));
    /** Represents a WallpaperSettings. */
    class WallpaperSettings {
        /** WallpaperSettings filename. */
        filename;
        /** WallpaperSettings opacity. */
        opacity;
    }
    /** Represents a WebFeatures. */
    class WebFeatures {
        /** WebFeatures labelsDisplay. */
        labelsDisplay;
        /** WebFeatures voipIndividualOutgoing. */
        voipIndividualOutgoing;
        /** WebFeatures groupsV3. */
        groupsV3;
        /** WebFeatures groupsV3Create. */
        groupsV3Create;
        /** WebFeatures changeNumberV2. */
        changeNumberV2;
        /** WebFeatures queryStatusV3Thumbnail. */
        queryStatusV3Thumbnail;
        /** WebFeatures liveLocations. */
        liveLocations;
        /** WebFeatures queryVname. */
        queryVname;
        /** WebFeatures voipIndividualIncoming. */
        voipIndividualIncoming;
        /** WebFeatures quickRepliesQuery. */
        quickRepliesQuery;
        /** WebFeatures payments. */
        payments;
        /** WebFeatures stickerPackQuery. */
        stickerPackQuery;
        /** WebFeatures liveLocationsFinal. */
        liveLocationsFinal;
        /** WebFeatures labelsEdit. */
        labelsEdit;
        /** WebFeatures mediaUpload. */
        mediaUpload;
        /** WebFeatures mediaUploadRichQuickReplies. */
        mediaUploadRichQuickReplies;
        /** WebFeatures vnameV2. */
        vnameV2;
        /** WebFeatures videoPlaybackUrl. */
        videoPlaybackUrl;
        /** WebFeatures statusRanking. */
        statusRanking;
        /** WebFeatures voipIndividualVideo. */
        voipIndividualVideo;
        /** WebFeatures thirdPartyStickers. */
        thirdPartyStickers;
        /** WebFeatures frequentlyForwardedSetting. */
        frequentlyForwardedSetting;
        /** WebFeatures groupsV4JoinPermission. */
        groupsV4JoinPermission;
        /** WebFeatures recentStickers. */
        recentStickers;
        /** WebFeatures catalog. */
        catalog;
        /** WebFeatures starredStickers. */
        starredStickers;
        /** WebFeatures voipGroupCall. */
        voipGroupCall;
        /** WebFeatures templateMessage. */
        templateMessage;
        /** WebFeatures templateMessageInteractivity. */
        templateMessageInteractivity;
        /** WebFeatures ephemeralMessages. */
        ephemeralMessages;
        /** WebFeatures e2ENotificationSync. */
        e2ENotificationSync;
        /** WebFeatures recentStickersV2. */
        recentStickersV2;
        /** WebFeatures recentStickersV3. */
        recentStickersV3;
        /** WebFeatures userNotice. */
        userNotice;
        /** WebFeatures support. */
        support;
        /** WebFeatures groupUiiCleanup. */
        groupUiiCleanup;
        /** WebFeatures groupDogfoodingInternalOnly. */
        groupDogfoodingInternalOnly;
        /** WebFeatures settingsSync. */
        settingsSync;
        /** WebFeatures archiveV2. */
        archiveV2;
        /** WebFeatures ephemeralAllowGroupMembers. */
        ephemeralAllowGroupMembers;
        /** WebFeatures ephemeral24HDuration. */
        ephemeral24HDuration;
        /** WebFeatures mdForceUpgrade. */
        mdForceUpgrade;
        /** WebFeatures disappearingMode. */
        disappearingMode;
        /** WebFeatures externalMdOptInAvailable. */
        externalMdOptInAvailable;
        /** WebFeatures noDeleteMessageTimeLimit. */
        noDeleteMessageTimeLimit;
    }
    (function (WebFeatures) {
        /** Flag enum. */
        let Flag;
        (function (Flag) {
            Flag[Flag["NOT_STARTED"] = 0] = "NOT_STARTED";
            Flag[Flag["FORCE_UPGRADE"] = 1] = "FORCE_UPGRADE";
            Flag[Flag["DEVELOPMENT"] = 2] = "DEVELOPMENT";
            Flag[Flag["PRODUCTION"] = 3] = "PRODUCTION";
        })(Flag || (Flag = {}));
    })(WebFeatures || (WebFeatures = {}));
    /** Represents a WebMessageInfo. */
    class WebMessageInfo {
        /** WebMessageInfo key. */
        key;
        /** WebMessageInfo message. */
        message;
        /** WebMessageInfo messageTimestamp. */
        messageTimestamp;
        /** WebMessageInfo status. */
        status;
        /** WebMessageInfo participant. */
        participant;
        /** WebMessageInfo messageC2STimestamp. */
        messageC2STimestamp;
        /** WebMessageInfo ignore. */
        ignore;
        /** WebMessageInfo starred. */
        starred;
        /** WebMessageInfo broadcast. */
        broadcast;
        /** WebMessageInfo pushName. */
        pushName;
        /** WebMessageInfo mediaCiphertextSha256. */
        mediaCiphertextSha256;
        /** WebMessageInfo multicast. */
        multicast;
        /** WebMessageInfo urlText. */
        urlText;
        /** WebMessageInfo urlNumber. */
        urlNumber;
        /** WebMessageInfo messageStubType. */
        messageStubType;
        /** WebMessageInfo clearMedia. */
        clearMedia;
        /** WebMessageInfo messageStubParameters. */
        messageStubParameters;
        /** WebMessageInfo duration. */
        duration;
        /** WebMessageInfo labels. */
        labels;
        /** WebMessageInfo paymentInfo. */
        paymentInfo;
        /** WebMessageInfo finalLiveLocation. */
        finalLiveLocation;
        /** WebMessageInfo quotedPaymentInfo. */
        quotedPaymentInfo;
        /** WebMessageInfo ephemeralStartTimestamp. */
        ephemeralStartTimestamp;
        /** WebMessageInfo ephemeralDuration. */
        ephemeralDuration;
        /** WebMessageInfo ephemeralOffToOn. */
        ephemeralOffToOn;
        /** WebMessageInfo ephemeralOutOfSync. */
        ephemeralOutOfSync;
        /** WebMessageInfo bizPrivacyStatus. */
        bizPrivacyStatus;
        /** WebMessageInfo verifiedBizName. */
        verifiedBizName;
        /** WebMessageInfo mediaData. */
        mediaData;
        /** WebMessageInfo photoChange. */
        photoChange;
        /** WebMessageInfo userReceipt. */
        userReceipt;
        /** WebMessageInfo reactions. */
        reactions;
        /** WebMessageInfo quotedStickerData. */
        quotedStickerData;
        /** WebMessageInfo futureproofData. */
        futureproofData;
        /** WebMessageInfo statusPsa. */
        statusPsa;
        /** WebMessageInfo pollUpdates. */
        pollUpdates;
        /** WebMessageInfo pollAdditionalMetadata. */
        pollAdditionalMetadata;
        /** WebMessageInfo agentId. */
        agentId;
        /** WebMessageInfo statusAlreadyViewed. */
        statusAlreadyViewed;
        /** WebMessageInfo messageSecret. */
        messageSecret;
        /** WebMessageInfo keepInChat. */
        keepInChat;
        /** WebMessageInfo originalSelfAuthorUserJidString. */
        originalSelfAuthorUserJidString;
        /** WebMessageInfo revokeMessageTimestamp. */
        revokeMessageTimestamp;
        /** WebMessageInfo pinInChat. */
        pinInChat;
        /** WebMessageInfo premiumMessageInfo. */
        premiumMessageInfo;
        /** WebMessageInfo is1PBizBotMessage. */
        is1PBizBotMessage;
        /** WebMessageInfo isGroupHistoryMessage. */
        isGroupHistoryMessage;
        /** WebMessageInfo botMessageInvokerJid. */
        botMessageInvokerJid;
        /** WebMessageInfo commentMetadata. */
        commentMetadata;
        /** WebMessageInfo eventResponses. */
        eventResponses;
        /** WebMessageInfo reportingTokenInfo. */
        reportingTokenInfo;
        /** WebMessageInfo newsletterServerId. */
        newsletterServerId;
        /** WebMessageInfo eventAdditionalMetadata. */
        eventAdditionalMetadata;
        /** WebMessageInfo isMentionedInStatus. */
        isMentionedInStatus;
        /** WebMessageInfo statusMentions. */
        statusMentions;
        /** WebMessageInfo targetMessageId. */
        targetMessageId;
        /** WebMessageInfo messageAddOns. */
        messageAddOns;
        /** WebMessageInfo statusMentionMessageInfo. */
        statusMentionMessageInfo;
        /** WebMessageInfo isSupportAiMessage. */
        isSupportAiMessage;
        /** WebMessageInfo statusMentionSources. */
        statusMentionSources;
        /** WebMessageInfo supportAiCitations. */
        supportAiCitations;
        /** WebMessageInfo botTargetId. */
        botTargetId;
    }
    (function (WebMessageInfo) {
        /** BizPrivacyStatus enum. */
        let BizPrivacyStatus;
        (function (BizPrivacyStatus) {
            BizPrivacyStatus[BizPrivacyStatus["E2EE"] = 0] = "E2EE";
            BizPrivacyStatus[BizPrivacyStatus["FB"] = 2] = "FB";
            BizPrivacyStatus[BizPrivacyStatus["BSP"] = 1] = "BSP";
            BizPrivacyStatus[BizPrivacyStatus["BSP_AND_FB"] = 3] = "BSP_AND_FB";
        })(BizPrivacyStatus || (BizPrivacyStatus = {}));
        /** Status enum. */
        let Status;
        (function (Status) {
            Status[Status["ERROR"] = 0] = "ERROR";
            Status[Status["PENDING"] = 1] = "PENDING";
            Status[Status["SERVER_ACK"] = 2] = "SERVER_ACK";
            Status[Status["DELIVERY_ACK"] = 3] = "DELIVERY_ACK";
            Status[Status["READ"] = 4] = "READ";
            Status[Status["PLAYED"] = 5] = "PLAYED";
        })(Status || (Status = {}));
        /** StubType enum. */
        let StubType;
        (function (StubType) {
            StubType[StubType["UNKNOWN"] = 0] = "UNKNOWN";
            StubType[StubType["REVOKE"] = 1] = "REVOKE";
            StubType[StubType["CIPHERTEXT"] = 2] = "CIPHERTEXT";
            StubType[StubType["FUTUREPROOF"] = 3] = "FUTUREPROOF";
            StubType[StubType["NON_VERIFIED_TRANSITION"] = 4] = "NON_VERIFIED_TRANSITION";
            StubType[StubType["UNVERIFIED_TRANSITION"] = 5] = "UNVERIFIED_TRANSITION";
            StubType[StubType["VERIFIED_TRANSITION"] = 6] = "VERIFIED_TRANSITION";
            StubType[StubType["VERIFIED_LOW_UNKNOWN"] = 7] = "VERIFIED_LOW_UNKNOWN";
            StubType[StubType["VERIFIED_HIGH"] = 8] = "VERIFIED_HIGH";
            StubType[StubType["VERIFIED_INITIAL_UNKNOWN"] = 9] = "VERIFIED_INITIAL_UNKNOWN";
            StubType[StubType["VERIFIED_INITIAL_LOW"] = 10] = "VERIFIED_INITIAL_LOW";
            StubType[StubType["VERIFIED_INITIAL_HIGH"] = 11] = "VERIFIED_INITIAL_HIGH";
            StubType[StubType["VERIFIED_TRANSITION_ANY_TO_NONE"] = 12] = "VERIFIED_TRANSITION_ANY_TO_NONE";
            StubType[StubType["VERIFIED_TRANSITION_ANY_TO_HIGH"] = 13] = "VERIFIED_TRANSITION_ANY_TO_HIGH";
            StubType[StubType["VERIFIED_TRANSITION_HIGH_TO_LOW"] = 14] = "VERIFIED_TRANSITION_HIGH_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_HIGH_TO_UNKNOWN"] = 15] = "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN";
            StubType[StubType["VERIFIED_TRANSITION_UNKNOWN_TO_LOW"] = 16] = "VERIFIED_TRANSITION_UNKNOWN_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_LOW_TO_UNKNOWN"] = 17] = "VERIFIED_TRANSITION_LOW_TO_UNKNOWN";
            StubType[StubType["VERIFIED_TRANSITION_NONE_TO_LOW"] = 18] = "VERIFIED_TRANSITION_NONE_TO_LOW";
            StubType[StubType["VERIFIED_TRANSITION_NONE_TO_UNKNOWN"] = 19] = "VERIFIED_TRANSITION_NONE_TO_UNKNOWN";
            StubType[StubType["GROUP_CREATE"] = 20] = "GROUP_CREATE";
            StubType[StubType["GROUP_CHANGE_SUBJECT"] = 21] = "GROUP_CHANGE_SUBJECT";
            StubType[StubType["GROUP_CHANGE_ICON"] = 22] = "GROUP_CHANGE_ICON";
            StubType[StubType["GROUP_CHANGE_INVITE_LINK"] = 23] = "GROUP_CHANGE_INVITE_LINK";
            StubType[StubType["GROUP_CHANGE_DESCRIPTION"] = 24] = "GROUP_CHANGE_DESCRIPTION";
            StubType[StubType["GROUP_CHANGE_RESTRICT"] = 25] = "GROUP_CHANGE_RESTRICT";
            StubType[StubType["GROUP_CHANGE_ANNOUNCE"] = 26] = "GROUP_CHANGE_ANNOUNCE";
            StubType[StubType["GROUP_PARTICIPANT_ADD"] = 27] = "GROUP_PARTICIPANT_ADD";
            StubType[StubType["GROUP_PARTICIPANT_REMOVE"] = 28] = "GROUP_PARTICIPANT_REMOVE";
            StubType[StubType["GROUP_PARTICIPANT_PROMOTE"] = 29] = "GROUP_PARTICIPANT_PROMOTE";
            StubType[StubType["GROUP_PARTICIPANT_DEMOTE"] = 30] = "GROUP_PARTICIPANT_DEMOTE";
            StubType[StubType["GROUP_PARTICIPANT_INVITE"] = 31] = "GROUP_PARTICIPANT_INVITE";
            StubType[StubType["GROUP_PARTICIPANT_LEAVE"] = 32] = "GROUP_PARTICIPANT_LEAVE";
            StubType[StubType["GROUP_PARTICIPANT_CHANGE_NUMBER"] = 33] = "GROUP_PARTICIPANT_CHANGE_NUMBER";
            StubType[StubType["BROADCAST_CREATE"] = 34] = "BROADCAST_CREATE";
            StubType[StubType["BROADCAST_ADD"] = 35] = "BROADCAST_ADD";
            StubType[StubType["BROADCAST_REMOVE"] = 36] = "BROADCAST_REMOVE";
            StubType[StubType["GENERIC_NOTIFICATION"] = 37] = "GENERIC_NOTIFICATION";
            StubType[StubType["E2E_IDENTITY_CHANGED"] = 38] = "E2E_IDENTITY_CHANGED";
            StubType[StubType["E2E_ENCRYPTED"] = 39] = "E2E_ENCRYPTED";
            StubType[StubType["CALL_MISSED_VOICE"] = 40] = "CALL_MISSED_VOICE";
            StubType[StubType["CALL_MISSED_VIDEO"] = 41] = "CALL_MISSED_VIDEO";
            StubType[StubType["INDIVIDUAL_CHANGE_NUMBER"] = 42] = "INDIVIDUAL_CHANGE_NUMBER";
            StubType[StubType["GROUP_DELETE"] = 43] = "GROUP_DELETE";
            StubType[StubType["GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE"] = 44] = "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE";
            StubType[StubType["CALL_MISSED_GROUP_VOICE"] = 45] = "CALL_MISSED_GROUP_VOICE";
            StubType[StubType["CALL_MISSED_GROUP_VIDEO"] = 46] = "CALL_MISSED_GROUP_VIDEO";
            StubType[StubType["PAYMENT_CIPHERTEXT"] = 47] = "PAYMENT_CIPHERTEXT";
            StubType[StubType["PAYMENT_FUTUREPROOF"] = 48] = "PAYMENT_FUTUREPROOF";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED"] = 49] = "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED"] = 50] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED"] = 51] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP"] = 52] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP";
            StubType[StubType["PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP"] = 53] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP";
            StubType[StubType["PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER"] = 54] = "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER";
            StubType[StubType["PAYMENT_ACTION_SEND_PAYMENT_REMINDER"] = 55] = "PAYMENT_ACTION_SEND_PAYMENT_REMINDER";
            StubType[StubType["PAYMENT_ACTION_SEND_PAYMENT_INVITATION"] = 56] = "PAYMENT_ACTION_SEND_PAYMENT_INVITATION";
            StubType[StubType["PAYMENT_ACTION_REQUEST_DECLINED"] = 57] = "PAYMENT_ACTION_REQUEST_DECLINED";
            StubType[StubType["PAYMENT_ACTION_REQUEST_EXPIRED"] = 58] = "PAYMENT_ACTION_REQUEST_EXPIRED";
            StubType[StubType["PAYMENT_ACTION_REQUEST_CANCELLED"] = 59] = "PAYMENT_ACTION_REQUEST_CANCELLED";
            StubType[StubType["BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM"] = 60] = "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM";
            StubType[StubType["BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP"] = 61] = "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP";
            StubType[StubType["BIZ_INTRO_TOP"] = 62] = "BIZ_INTRO_TOP";
            StubType[StubType["BIZ_INTRO_BOTTOM"] = 63] = "BIZ_INTRO_BOTTOM";
            StubType[StubType["BIZ_NAME_CHANGE"] = 64] = "BIZ_NAME_CHANGE";
            StubType[StubType["BIZ_MOVE_TO_CONSUMER_APP"] = 65] = "BIZ_MOVE_TO_CONSUMER_APP";
            StubType[StubType["BIZ_TWO_TIER_MIGRATION_TOP"] = 66] = "BIZ_TWO_TIER_MIGRATION_TOP";
            StubType[StubType["BIZ_TWO_TIER_MIGRATION_BOTTOM"] = 67] = "BIZ_TWO_TIER_MIGRATION_BOTTOM";
            StubType[StubType["OVERSIZED"] = 68] = "OVERSIZED";
            StubType[StubType["GROUP_CHANGE_NO_FREQUENTLY_FORWARDED"] = 69] = "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED";
            StubType[StubType["GROUP_V4_ADD_INVITE_SENT"] = 70] = "GROUP_V4_ADD_INVITE_SENT";
            StubType[StubType["GROUP_PARTICIPANT_ADD_REQUEST_JOIN"] = 71] = "GROUP_PARTICIPANT_ADD_REQUEST_JOIN";
            StubType[StubType["CHANGE_EPHEMERAL_SETTING"] = 72] = "CHANGE_EPHEMERAL_SETTING";
            StubType[StubType["E2E_DEVICE_CHANGED"] = 73] = "E2E_DEVICE_CHANGED";
            StubType[StubType["VIEWED_ONCE"] = 74] = "VIEWED_ONCE";
            StubType[StubType["E2E_ENCRYPTED_NOW"] = 75] = "E2E_ENCRYPTED_NOW";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_BSP_PREMISE"] = 76] = "BLUE_MSG_BSP_FB_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_SELF_FB"] = 77] = "BLUE_MSG_BSP_FB_TO_SELF_FB";
            StubType[StubType["BLUE_MSG_BSP_FB_TO_SELF_PREMISE"] = 78] = "BLUE_MSG_BSP_FB_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED"] = 79] = "BLUE_MSG_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 80] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED"] = 81] = "BLUE_MSG_BSP_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 82] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE"] = 83] = "BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_UNVERIFIED"] = 84] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 85] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_VERIFIED"] = 86] = "BLUE_MSG_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 87] = "BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED"] = 88] = "BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED"] = 89] = "BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED"] = 90] = "BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED"] = 91] = "BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_TO_BSP_PREMISE"] = 92] = "BLUE_MSG_SELF_FB_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_FB_TO_SELF_PREMISE"] = 93] = "BLUE_MSG_SELF_FB_TO_SELF_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED"] = 94] = "BLUE_MSG_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 95] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED"] = 96] = "BLUE_MSG_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 97] = "BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE"] = 98] = "BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_UNVERIFIED"] = 99] = "BLUE_MSG_SELF_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_PREMISE_VERIFIED"] = 100] = "BLUE_MSG_SELF_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_TO_BSP_FB"] = 101] = "BLUE_MSG_TO_BSP_FB";
            StubType[StubType["BLUE_MSG_TO_CONSUMER"] = 102] = "BLUE_MSG_TO_CONSUMER";
            StubType[StubType["BLUE_MSG_TO_SELF_FB"] = 103] = "BLUE_MSG_TO_SELF_FB";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED"] = 104] = "BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 105] = "BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 106] = "BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_UNVERIFIED_TO_VERIFIED"] = 107] = "BLUE_MSG_UNVERIFIED_TO_VERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED"] = 108] = "BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 109] = "BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 110] = "BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_VERIFIED_TO_UNVERIFIED"] = 111] = "BLUE_MSG_VERIFIED_TO_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 112] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 113] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 114] = "BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 115] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 116] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED";
            StubType[StubType["BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 117] = "BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED";
            StubType[StubType["E2E_IDENTITY_UNAVAILABLE"] = 118] = "E2E_IDENTITY_UNAVAILABLE";
            StubType[StubType["GROUP_CREATING"] = 119] = "GROUP_CREATING";
            StubType[StubType["GROUP_CREATE_FAILED"] = 120] = "GROUP_CREATE_FAILED";
            StubType[StubType["GROUP_BOUNCED"] = 121] = "GROUP_BOUNCED";
            StubType[StubType["BLOCK_CONTACT"] = 122] = "BLOCK_CONTACT";
            StubType[StubType["EPHEMERAL_SETTING_NOT_APPLIED"] = 123] = "EPHEMERAL_SETTING_NOT_APPLIED";
            StubType[StubType["SYNC_FAILED"] = 124] = "SYNC_FAILED";
            StubType[StubType["SYNCING"] = 125] = "SYNCING";
            StubType[StubType["BIZ_PRIVACY_MODE_INIT_FB"] = 126] = "BIZ_PRIVACY_MODE_INIT_FB";
            StubType[StubType["BIZ_PRIVACY_MODE_INIT_BSP"] = 127] = "BIZ_PRIVACY_MODE_INIT_BSP";
            StubType[StubType["BIZ_PRIVACY_MODE_TO_FB"] = 128] = "BIZ_PRIVACY_MODE_TO_FB";
            StubType[StubType["BIZ_PRIVACY_MODE_TO_BSP"] = 129] = "BIZ_PRIVACY_MODE_TO_BSP";
            StubType[StubType["DISAPPEARING_MODE"] = 130] = "DISAPPEARING_MODE";
            StubType[StubType["E2E_DEVICE_FETCH_FAILED"] = 131] = "E2E_DEVICE_FETCH_FAILED";
            StubType[StubType["ADMIN_REVOKE"] = 132] = "ADMIN_REVOKE";
            StubType[StubType["GROUP_INVITE_LINK_GROWTH_LOCKED"] = 133] = "GROUP_INVITE_LINK_GROWTH_LOCKED";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP"] = 134] = "COMMUNITY_LINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_LINK_SIBLING_GROUP"] = 135] = "COMMUNITY_LINK_SIBLING_GROUP";
            StubType[StubType["COMMUNITY_LINK_SUB_GROUP"] = 136] = "COMMUNITY_LINK_SUB_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_PARENT_GROUP"] = 137] = "COMMUNITY_UNLINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_SIBLING_GROUP"] = 138] = "COMMUNITY_UNLINK_SIBLING_GROUP";
            StubType[StubType["COMMUNITY_UNLINK_SUB_GROUP"] = 139] = "COMMUNITY_UNLINK_SUB_GROUP";
            StubType[StubType["GROUP_PARTICIPANT_ACCEPT"] = 140] = "GROUP_PARTICIPANT_ACCEPT";
            StubType[StubType["GROUP_PARTICIPANT_LINKED_GROUP_JOIN"] = 141] = "GROUP_PARTICIPANT_LINKED_GROUP_JOIN";
            StubType[StubType["COMMUNITY_CREATE"] = 142] = "COMMUNITY_CREATE";
            StubType[StubType["EPHEMERAL_KEEP_IN_CHAT"] = 143] = "EPHEMERAL_KEEP_IN_CHAT";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST"] = 144] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE"] = 145] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE";
            StubType[StubType["INTEGRITY_UNLINK_PARENT_GROUP"] = 146] = "INTEGRITY_UNLINK_PARENT_GROUP";
            StubType[StubType["COMMUNITY_PARTICIPANT_PROMOTE"] = 147] = "COMMUNITY_PARTICIPANT_PROMOTE";
            StubType[StubType["COMMUNITY_PARTICIPANT_DEMOTE"] = 148] = "COMMUNITY_PARTICIPANT_DEMOTE";
            StubType[StubType["COMMUNITY_PARENT_GROUP_DELETED"] = 149] = "COMMUNITY_PARENT_GROUP_DELETED";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL"] = 150] = "COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL";
            StubType[StubType["GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP"] = 151] = "GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP";
            StubType[StubType["MASKED_THREAD_CREATED"] = 152] = "MASKED_THREAD_CREATED";
            StubType[StubType["MASKED_THREAD_UNMASKED"] = 153] = "MASKED_THREAD_UNMASKED";
            StubType[StubType["BIZ_CHAT_ASSIGNMENT"] = 154] = "BIZ_CHAT_ASSIGNMENT";
            StubType[StubType["CHAT_PSA"] = 155] = "CHAT_PSA";
            StubType[StubType["CHAT_POLL_CREATION_MESSAGE"] = 156] = "CHAT_POLL_CREATION_MESSAGE";
            StubType[StubType["CAG_MASKED_THREAD_CREATED"] = 157] = "CAG_MASKED_THREAD_CREATED";
            StubType[StubType["COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED"] = 158] = "COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED";
            StubType[StubType["CAG_INVITE_AUTO_ADD"] = 159] = "CAG_INVITE_AUTO_ADD";
            StubType[StubType["BIZ_CHAT_ASSIGNMENT_UNASSIGN"] = 160] = "BIZ_CHAT_ASSIGNMENT_UNASSIGN";
            StubType[StubType["CAG_INVITE_AUTO_JOINED"] = 161] = "CAG_INVITE_AUTO_JOINED";
            StubType[StubType["SCHEDULED_CALL_START_MESSAGE"] = 162] = "SCHEDULED_CALL_START_MESSAGE";
            StubType[StubType["COMMUNITY_INVITE_RICH"] = 163] = "COMMUNITY_INVITE_RICH";
            StubType[StubType["COMMUNITY_INVITE_AUTO_ADD_RICH"] = 164] = "COMMUNITY_INVITE_AUTO_ADD_RICH";
            StubType[StubType["SUB_GROUP_INVITE_RICH"] = 165] = "SUB_GROUP_INVITE_RICH";
            StubType[StubType["SUB_GROUP_PARTICIPANT_ADD_RICH"] = 166] = "SUB_GROUP_PARTICIPANT_ADD_RICH";
            StubType[StubType["COMMUNITY_LINK_PARENT_GROUP_RICH"] = 167] = "COMMUNITY_LINK_PARENT_GROUP_RICH";
            StubType[StubType["COMMUNITY_PARTICIPANT_ADD_RICH"] = 168] = "COMMUNITY_PARTICIPANT_ADD_RICH";
            StubType[StubType["SILENCED_UNKNOWN_CALLER_AUDIO"] = 169] = "SILENCED_UNKNOWN_CALLER_AUDIO";
            StubType[StubType["SILENCED_UNKNOWN_CALLER_VIDEO"] = 170] = "SILENCED_UNKNOWN_CALLER_VIDEO";
            StubType[StubType["GROUP_MEMBER_ADD_MODE"] = 171] = "GROUP_MEMBER_ADD_MODE";
            StubType[StubType["GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD"] = 172] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD";
            StubType[StubType["COMMUNITY_CHANGE_DESCRIPTION"] = 173] = "COMMUNITY_CHANGE_DESCRIPTION";
            StubType[StubType["SENDER_INVITE"] = 174] = "SENDER_INVITE";
            StubType[StubType["RECEIVER_INVITE"] = 175] = "RECEIVER_INVITE";
            StubType[StubType["COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS"] = 176] = "COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS";
            StubType[StubType["PINNED_MESSAGE_IN_CHAT"] = 177] = "PINNED_MESSAGE_IN_CHAT";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITER"] = 178] = "PAYMENT_INVITE_SETUP_INVITER";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY"] = 179] = "PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY";
            StubType[StubType["PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE"] = 180] = "PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE";
            StubType[StubType["LINKED_GROUP_CALL_START"] = 181] = "LINKED_GROUP_CALL_START";
            StubType[StubType["REPORT_TO_ADMIN_ENABLED_STATUS"] = 182] = "REPORT_TO_ADMIN_ENABLED_STATUS";
            StubType[StubType["EMPTY_SUBGROUP_CREATE"] = 183] = "EMPTY_SUBGROUP_CREATE";
            StubType[StubType["SCHEDULED_CALL_CANCEL"] = 184] = "SCHEDULED_CALL_CANCEL";
            StubType[StubType["SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH"] = 185] = "SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH";
            StubType[StubType["GROUP_CHANGE_RECENT_HISTORY_SHARING"] = 186] = "GROUP_CHANGE_RECENT_HISTORY_SHARING";
            StubType[StubType["PAID_MESSAGE_SERVER_CAMPAIGN_ID"] = 187] = "PAID_MESSAGE_SERVER_CAMPAIGN_ID";
            StubType[StubType["GENERAL_CHAT_CREATE"] = 188] = "GENERAL_CHAT_CREATE";
            StubType[StubType["GENERAL_CHAT_ADD"] = 189] = "GENERAL_CHAT_ADD";
            StubType[StubType["GENERAL_CHAT_AUTO_ADD_DISABLED"] = 190] = "GENERAL_CHAT_AUTO_ADD_DISABLED";
            StubType[StubType["SUGGESTED_SUBGROUP_ANNOUNCE"] = 191] = "SUGGESTED_SUBGROUP_ANNOUNCE";
            StubType[StubType["BIZ_BOT_1P_MESSAGING_ENABLED"] = 192] = "BIZ_BOT_1P_MESSAGING_ENABLED";
            StubType[StubType["CHANGE_USERNAME"] = 193] = "CHANGE_USERNAME";
            StubType[StubType["BIZ_COEX_PRIVACY_INIT_SELF"] = 194] = "BIZ_COEX_PRIVACY_INIT_SELF";
            StubType[StubType["BIZ_COEX_PRIVACY_TRANSITION_SELF"] = 195] = "BIZ_COEX_PRIVACY_TRANSITION_SELF";
            StubType[StubType["SUPPORT_AI_EDUCATION"] = 196] = "SUPPORT_AI_EDUCATION";
            StubType[StubType["BIZ_BOT_3P_MESSAGING_ENABLED"] = 197] = "BIZ_BOT_3P_MESSAGING_ENABLED";
            StubType[StubType["REMINDER_SETUP_MESSAGE"] = 198] = "REMINDER_SETUP_MESSAGE";
            StubType[StubType["REMINDER_SENT_MESSAGE"] = 199] = "REMINDER_SENT_MESSAGE";
            StubType[StubType["REMINDER_CANCEL_MESSAGE"] = 200] = "REMINDER_CANCEL_MESSAGE";
            StubType[StubType["BIZ_COEX_PRIVACY_INIT"] = 201] = "BIZ_COEX_PRIVACY_INIT";
            StubType[StubType["BIZ_COEX_PRIVACY_TRANSITION"] = 202] = "BIZ_COEX_PRIVACY_TRANSITION";
            StubType[StubType["GROUP_DEACTIVATED"] = 203] = "GROUP_DEACTIVATED";
            StubType[StubType["COMMUNITY_DEACTIVATE_SIBLING_GROUP"] = 204] = "COMMUNITY_DEACTIVATE_SIBLING_GROUP";
            StubType[StubType["EVENT_UPDATED"] = 205] = "EVENT_UPDATED";
            StubType[StubType["EVENT_CANCELED"] = 206] = "EVENT_CANCELED";
            StubType[StubType["COMMUNITY_OWNER_UPDATED"] = 207] = "COMMUNITY_OWNER_UPDATED";
            StubType[StubType["COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN"] = 208] = "COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN";
            StubType[StubType["CAPI_GROUP_NE2EE_SYSTEM_MESSAGE"] = 209] = "CAPI_GROUP_NE2EE_SYSTEM_MESSAGE";
            StubType[StubType["STATUS_MENTION"] = 210] = "STATUS_MENTION";
            StubType[StubType["USER_CONTROLS_SYSTEM_MESSAGE"] = 211] = "USER_CONTROLS_SYSTEM_MESSAGE";
            StubType[StubType["SUPPORT_SYSTEM_MESSAGE"] = 212] = "SUPPORT_SYSTEM_MESSAGE";
            StubType[StubType["CHANGE_LID"] = 213] = "CHANGE_LID";
            StubType[StubType["BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE"] = 214] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE";
            StubType[StubType["BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE"] = 215] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE";
            StubType[StubType["CHANGE_LIMIT_SHARING"] = 216] = "CHANGE_LIMIT_SHARING";
            StubType[StubType["GROUP_MEMBER_LINK_MODE"] = 217] = "GROUP_MEMBER_LINK_MODE";
            StubType[StubType["BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE"] = 218] = "BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE";
        })(StubType || (StubType = {}));
    })(WebMessageInfo || (WebMessageInfo = {}));
    /** Represents a WebNotificationsInfo. */
    class WebNotificationsInfo {
        /** WebNotificationsInfo timestamp. */
        timestamp;
        /** WebNotificationsInfo unreadChats. */
        unreadChats;
        /** WebNotificationsInfo notifyMessageCount. */
        notifyMessageCount;
        /** WebNotificationsInfo notifyMessages. */
        notifyMessages;
    }
})(proto || (proto = {}));
