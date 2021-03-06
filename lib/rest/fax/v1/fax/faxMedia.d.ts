/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the FaxMediaList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param faxSid - Fax SID
 */
declare function FaxMediaList(version: V1, faxSid: string): FaxMediaListInstance;

interface FaxMediaListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FaxMediaContext;
  /**
   * Streams FaxMediaInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FaxMediaListInstanceEachOptions, callback?: (item: FaxMediaInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a fax_media
   *
   * @param sid - A string that uniquely identifies this fax media
   */
  get(sid: string): FaxMediaContext;
  /**
   * Retrieve a single target page of FaxMediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FaxMediaPage) => any): Promise<FaxMediaPage>;
  /**
   * Lists FaxMediaInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FaxMediaListInstanceOptions, callback?: (error: Error | null, items: FaxMediaInstance[]) => any): Promise<FaxMediaInstance[]>;
  /**
   * Retrieve a single page of FaxMediaInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FaxMediaListInstancePageOptions, callback?: (error: Error | null, items: FaxMediaPage) => any): Promise<FaxMediaPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FaxMediaListInstanceEachOptions {
  callback?: (item: FaxMediaInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FaxMediaListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FaxMediaListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FaxMediaPayload extends FaxMediaResource, Page.TwilioResponsePayload {
}

interface FaxMediaResource {
  account_sid: string;
  content_type: string;
  date_created: Date;
  date_updated: Date;
  fax_sid: string;
  sid: string;
  url: string;
}

interface FaxMediaSolution {
  faxSid?: string;
}


declare class FaxMediaContext {
  /**
   * Initialize the FaxMediaContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param faxSid - Fax SID
   * @param sid - A string that uniquely identifies this fax media
   */
  constructor(version: V1, faxSid: string, sid: string);

  /**
   * fetch a FaxMediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FaxMediaInstance) => any): Promise<FaxMediaInstance>;
  /**
   * remove a FaxMediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FaxMediaInstance) => any): void;
}


declare class FaxMediaInstance extends SerializableClass {
  /**
   * Initialize the FaxMediaContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this fax media
   * @property accountSid - Account SID
   * @property faxSid - Fax SID
   * @property contentType - Media content type
   * @property dateCreated - The date this fax media was created
   * @property dateUpdated - The date this fax media was updated
   * @property url - The URL of this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param faxSid - Fax SID
   * @param sid - A string that uniquely identifies this fax media
   */
  constructor(version: V1, payload: FaxMediaPayload, faxSid: string, sid: string);

  private _proxy: FaxMediaContext;
  accountSid: string;
  contentType: string;
  dateCreated: Date;
  dateUpdated: Date;
  faxSid: string;
  /**
   * fetch a FaxMediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FaxMediaInstance) => any): void;
  /**
   * remove a FaxMediaInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FaxMediaInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the FaxMediaInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class FaxMediaPage extends Page<V1, FaxMediaPayload, FaxMediaResource, FaxMediaInstance> {
  /**
   * Initialize the FaxMediaPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FaxMediaSolution);

  /**
   * Build an instance of FaxMediaInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FaxMediaPayload): FaxMediaInstance;
}

export { FaxMediaContext, FaxMediaInstance, FaxMediaList, FaxMediaListInstance, FaxMediaListInstanceEachOptions, FaxMediaListInstanceOptions, FaxMediaListInstancePageOptions, FaxMediaPage, FaxMediaPayload, FaxMediaResource, FaxMediaSolution }
